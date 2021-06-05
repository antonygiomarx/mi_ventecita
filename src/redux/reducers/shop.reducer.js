const SHOP_REDUCER = (state = {}, action) => {
  console.log(action);
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
        products: state.products.map((productsCtx) =>
          product.id === productsCtx.id
            ? { ...productsCtx, ...product }
            : productsCtx
        ),
      };

    default:
      return state;
  }
};
export default SHOP_REDUCER;
