import { combineReducers } from "redux";
import { productReducer, selectedproductReducer, addcart} from "./productReducer";

const reducers = combineReducers({
  allproducts: productReducer,
  productselect: selectedproductReducer,
  cart : addcart,
});

export default reducers;
