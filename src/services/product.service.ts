import axios, { AxiosResponse } from "axios";
import { Config } from "../../src/config/config";
import { Product } from "../../src/models/product.model";

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

  async update(): Promise<AxiosResponse> {
    const { data } = await axios.post(
      "https://us-central1-miventecita-6be84.cloudfunctions.net/api/updateProduct",
      this._product,
      { headers: { Authorization: `Bearer ${Config.token}` } },
    );
    return data;
  }
}
