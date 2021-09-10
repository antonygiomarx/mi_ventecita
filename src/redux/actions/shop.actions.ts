import { Action } from "redux";
import { Product } from "../../models/product.model";

interface ShopAction extends Action {
  type: string;
  product: Product;
}

export const addProductToCart = (product: Product): ShopAction => {
  return {
    type: "ADD_PRODUCT_TO_CART",
    product,
  };
};

export const updateProductCart = (product: Product): ShopAction => {
  return {
    type: "UPDATE_PRODUCT",
    product,
  };
};
