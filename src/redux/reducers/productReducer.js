import Actiontypes from "../constants/action-types";

const initialstate = {
  product: [],
  cart: [],
};
export const productReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case Actiontypes.SET_PRODUCT:
      return { ...state, product: payload };
    default:
      return state;
  }
};

export const selectedproductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Actiontypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case Actiontypes.REMOVE_SELECTED_PRODUCTS:
      return {};

    default:
      return state;
  }
};

export const addcart = (state = {}, { type, payload }) => {
  switch (type) {
    case Actiontypes.ADD_CART:
      return { ...state, ...payload };
    case Actiontypes.REMOVE_SELECTED_PRODUCTS:
      return {};

    default:
      return state;
  }
};
// export const addcart = (state = initialstate, action) => {
//   const item = state.product.find((prod) => prod.id === action.payload.id);
//   const inCart = state.cart.find((item) =>
//     item.id === action.payload.id ? true : false
//   );
//   switch (action.type) {
//     case Actiontypes.ADD_CART:
//       return {
//         ...state,
//         cart: inCart
//           ? state.cart.map((item) =>
//               item.id === action.payload.id ? { ...item } : item
//             )
//           : [...state.cart, { ...item }],
//       };
//   }
// };
