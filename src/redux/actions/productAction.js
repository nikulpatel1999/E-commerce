import Actiontypes from "../constants/action-types";

export const setProduct = (product) => {
  return {
    type: Actiontypes.SET_PRODUCT,
    payload: product,
  };
};

export const selectedProduct = (product) => {
  return {
    type: Actiontypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeselectedProduct = () => {
  return {
    type: Actiontypes.REMOVE_SELECTED_PRODUCTS,
  };
};

export const addcart = (product) => {
  return {
    type: Actiontypes.ADD_CART,
    payload: product,
  };
};
