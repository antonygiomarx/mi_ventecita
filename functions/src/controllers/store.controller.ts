import { Request, Response, Router } from "express";
import { companiesRepository, Company, Product } from "../models/company.model";
import { CompanyService, ProductService } from "../services/firestore.service";
import { v4 as uuid } from "uuid";
import { firestore } from "firebase-admin";
import authMiddleware from "../middlewares/auth.middleware";

const storeController = Router();

storeController.get(
  "/getCompanies",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const companies = await companiesRepository.find();

      return res.json({
        success: true,
        companies,
      });
    } catch (error) {
      return res.json({
        success: false,
        error: error.message,
      });
    }
  }
);

storeController.post(
  "/addCompany",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { logo, name, usersAllowed } = req.body as Company;

      const id = uuid();

      const companyService = new CompanyService();

      const newCompany = await companyService.createCompany({
        id,
        logo,
        name,
        usersAllowed,
      });

      return res.json({
        success: true,
        message: "New Company Created",
        company: newCompany,
      });
    } catch (error) {
      return res.json({
        success: false,
        error: error.message,
      });
    }
  }
);

storeController.post(
  "/addProduct",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const {
        name,
        category,
        imageUrl,
        price,
        provider,
        companyId,
        description,
        quantity,
      } = req.body as Product;

      if (
        !name ||
        !category ||
        !price ||
        !imageUrl ||
        !provider ||
        !companyId ||
        !description ||
        !quantity
      ) {
        return res
          .json({
            success: false,
            message:
              "name, category, quantity, description, imageUrl, price, provider, companyId are required",
          })
          .status(400);
      }

      const product = new ProductService();

      const id = uuid();
      const createdAt = firestore.Timestamp.now();
      const updateAt = firestore.Timestamp.now();

      const newProduct = await product.add({
        name,
        category,
        imageUrl,
        price,
        provider,
        id,
        createdAt,
        updateAt,
        companyId,
        description,
        quantity,
      });

      return res.json({
        success: true,
        message: "New Product Created",
        product: newProduct,
      });
    } catch (error) {
      return res.json({
        success: false,
        error: error.message,
      });
    }
  }
);

storeController.get(
  "/getProducts",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id: companyId } = req.query as unknown as Company;

      if (!companyId) {
        return res
          .json({
            success: false,
            message: "Company ID is required",
          })
          .status(400);
      }

      const product = new ProductService();

      const products = await product.getAll(companyId);

      return res.json({
        success: true,
        message: "Products",
        products: products,
      });
    } catch (error) {
      return res.json({
        success: false,
        error: error.message,
      });
    }
  }
);

storeController.get(
  "/getProduct/:id",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id: companyId } = req.body as Company;
      const { id: productId } = req.params;

      if (!companyId) {
        return res
          .json({
            success: false,
            message: "Company ID is required",
          })
          .status(400);
      }
      if (!productId) {
        return res
          .json({
            success: false,
            message: "Product ID is required",
          })
          .status(400);
      }

      const productService = new ProductService();

      const product = await productService.get({ companyId, productId });

      return res.json({
        success: true,
        message: "Product",
        products: product,
      });
    } catch (error) {
      return res.json({
        success: false,
        error: error.message,
      });
    }
  }
);

storeController.post(
  "/updateProduct",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const productUpdated = req.body as Product;

      if (!productUpdated.companyId) {
        return res
          .json({
            success: false,
            message: "Company ID is required",
          })
          .status(400);
      }
      if (!productUpdated.id) {
        return res
          .json({
            success: false,
            message: "Product ID is required",
          })
          .status(400);
      }

      const productService = new ProductService();

      const product = await productService.update(productUpdated);

      return res.json({
        success: true,
        message: "Product",
        product: product,
      });
    } catch (error) {
      return res.json({
        success: false,
        error: error.message,
      });
    }
  }
);

export default storeController;
