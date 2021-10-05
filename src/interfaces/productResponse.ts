import { Product } from "@models/product.model";

export interface GetProductResponse {
  success: boolean;
  message: string;
  product: Product;
}
