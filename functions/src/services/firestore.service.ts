import { firestore } from "firebase-admin";

import { companiesRepository, Company, Product } from "../models/company.model";
import { ProductQuery } from "../models/product.interface";

export class CompanyService {
  async createCompany({ id, name, logo, usersAllowed }: Company) {
    try {
      const company = new Company();

      company.name = name;
      company.logo = logo;
      company.id = id;
      company.usersAllowed = usersAllowed;
      company.createdAt = firestore.Timestamp.now();
      company.updateAt = firestore.Timestamp.now();

      const companyDocument = await companiesRepository.create(company);

      return companyDocument;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export class ProductService {
  async add({
    name,
    price,
    provider,
    imageUrl,
    category,
    createdAt,
    id,
    updateAt,
    companyId,
    description,
  }: Product): Promise<Product | null> {
    try {
      const companyToUpdate = await companiesRepository.findById(companyId);

      const newProduct = await (
        await companiesRepository.update(companyToUpdate)
      ).products!.create({
        name,
        price,
        provider,
        imageUrl,
        category,
        createdAt,
        id,
        updateAt,
        companyId,
        description,
      });

      return newProduct;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getAll(id: string): Promise<Product[] | null> {
    const products = await (
      await companiesRepository.findById(id)
    ).products!.find();

    return products;
  }

  async get({ companyId, productId }: ProductQuery): Promise<Product | null> {
    const product = await (
      await companiesRepository.findById(companyId)
    ).products!.findById(productId);

    return product;
  }

  async update(product: Product): Promise<any | null> {
    let productToUpdate = await (
      await companiesRepository.findById(product.companyId)
    ).products!.findById(product.id);

    productToUpdate = product;

    productToUpdate.updateAt = firestore.Timestamp.now();

    await (
      await companiesRepository.findById(product.companyId)
    ).products!.update(productToUpdate!);

    return productToUpdate;
  }
}
