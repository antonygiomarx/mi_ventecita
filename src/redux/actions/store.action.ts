import { Action } from "redux";
import { Product } from "../../models/product.model";

interface StoreAction extends Action {
  type: string;
  products?: Product[];
  product?: Product;
}

export const setProducts = (products: Product[]): StoreAction => {
  return {
    type: "SET_PRODUCTS",
    products,
  };
};

export const addProduct = (product: Product): StoreAction => {
  return {
    type: "ADD_PRODUCT",
    product,
  };
};

export const updateProduct = (product: Product): StoreAction => {
  return {
    type: "UPDATE_PRODUCT",
    product,
  };
};
