import axios, { AxiosResponse } from "axios";
import { Config } from "@config/config";
import { Product } from "@models/product.model";
import { GetProductResponse } from "@interfaces/productResponse";

export interface GetProductsResponse {
  success: boolean;
  message: string;
  products: Product[];
}

export interface AddProductResponse {
  success: boolean;
  message: string;
  product: Product;
}

export class ProductService {
  constructor(private _product: Product) {}

  async create(): Promise<AddProductResponse> {
    const { data } = await axios.post(
      "https://us-central1-miventecita-6be84.cloudfunctions.net/api/addProduct",
      this._product,
      { headers: { Authorization: `Bearer ${Config.token}` } },
    );
    return data;
  }

  static async getAll(): Promise<GetProductsResponse> {
    const { data } = await axios.get(
      "https://us-central1-miventecita-6be84.cloudfunctions.net/api/getProducts?id=Bq7agxz8zsxvF8YDcq2k",
      {
        headers: {
          Authorization: `Bearer ${Config.token}`,
        },
      },
    );
    return data as GetProductsResponse;
  }

  static async get(id: string): Promise<GetProductResponse> {
    const { data } = await axios.get(
      `https://us-central1-miventecita-6be84.cloudfunctions.net/api/getProduct/${id}?id=Bq7agxz8zsxvF8YDcq2k`,
      {
        headers: {
          Authorization: `Bearer ${Config.token}`,
        },
      },
    );
    return data as GetProductResponse;
  }

  async update(): Promise<AxiosResponse> {
    const { data } = await axios.post(
      "https://us-central1-miventecita-6be84.cloudfunctions.net/api/updateProduct",
      this._product,
      { headers: { Authorization: `Bearer ${Config.token}` } },
    );
    return data;
  }
}
