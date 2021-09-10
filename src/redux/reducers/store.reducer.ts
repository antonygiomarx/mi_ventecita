import { StoreState } from "../models/store-state.model";
import { Product } from "../../models/product.model";

export interface StoreReducerAction {
  type: string;
  products: Product[];
  value: boolean;
  product: Product;
  modalIsOpen: boolean;
}

export const storeReducer = (
  state: StoreState = {
    modalIsOpen: false,
  },
  action: StoreReducerAction,
): StoreState => {
  const { type, products, value, product } = action;

  switch (type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products!, ...[product]],
      };

    case "SET_PRODUCTS":
      return {
        ...state,
        products,
      };

    case "TOGGLE_MODAL":
      return {
        ...state,
        modalIsOpen: value,
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products?.map((productsCtx: Product) =>
          product?.id === productsCtx.id
            ? { ...productsCtx, ...product }
            : productsCtx,
        ),
      };

    default:
      return state;
  }
};