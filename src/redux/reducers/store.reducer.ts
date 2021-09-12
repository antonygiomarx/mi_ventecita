import { StoreState } from "../models/store-state.model";
import { Product } from "../../models/product.model";

export interface StoreReducerAction {
  type: string;
  products: Product[];
  product: Product;
  modalIsOpen: boolean;
}

export const storeReducer = (
  state: StoreState = {
    modalIsOpen: false,
  },
  action: StoreReducerAction,
): StoreState => {
  const { type, products, product, modalIsOpen } = action;

  switch (type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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
        modalIsOpen,
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
