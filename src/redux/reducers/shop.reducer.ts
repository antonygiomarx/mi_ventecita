import { ShopState } from "../models/shop-state.model";
import { Product } from "../../models/product.model";

interface ShopReducerAction {
  type: string;
  product: Product;
}

export const shopReducer = (
  state: ShopState = {
    products: [],
  },
  action: ShopReducerAction,
): ShopState => {
  const { type, product } = action;

  switch (type) {
    case "ADD_PRODUCT_TO_CART":
      return {
        ...state,
        products: [...state.products, ...[product]],
      };

    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products.map((productsCtx: Product) =>
          product.id === productsCtx.id
            ? { ...productsCtx, ...product }
            : productsCtx,
        ),
      };

    default:
      return state;
  }
};
