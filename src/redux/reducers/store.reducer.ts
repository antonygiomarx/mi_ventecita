import { Reducer } from "redux";
import { Product } from "../../../src/models/product.model";

interface StoreState {
  products: Product[];
}

interface StoreAction {
  type: string;
  products: Product[];
  value: boolean;
  product: Product;
}

const STORE_REDUCER: Reducer<StoreState, StoreAction> = (
  state = {
    products: [],
  },
  action,
) => {
  const { type, products, value, product } = action;

  switch (type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, ...[product]],
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
        products: state.products.map((productsCtx: Product) =>
          product?.id === productsCtx.id
            ? { ...productsCtx, ...product }
            : productsCtx,
        ),
      };

    default:
      return state;
  }
};
export default STORE_REDUCER;
