import React, { useEffect } from "react";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { useSelector, useDispatch } from "react-redux";
import { setProduct } from "../redux/actions/productAction";
import ProductDetail from "./ProductDetail";

function ProductListing() {
  const product = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchdata = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProduct(response.data));
  };

  useEffect(() => {
    fetchdata();
  }, []);
  console.log("products", product);

  return (
    <div className="ui five column grid ">
      <ProductComponent />
      {/* <ProductDetail/> */}
    </div>
  );
}

export default ProductListing;
