import { Product } from "../../models/product.model";

export interface StoreState {
  products?: Product[];
  type?: string;
  value?: boolean;
  product?: Product;
  modalIsOpen?: boolean;
}
