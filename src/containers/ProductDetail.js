import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectedProduct,
  removeselectedProduct,
} from "../redux/actions/productAction";

function ProductDetail() {
  let product = useSelector((state) => state.productselect);

  const { id, image, title, price, category, description } = product;

  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchproductdetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== " ") fetchproductdetail();
    return () => {
      dispatch(removeselectedProduct());
    };
  }, [productId]);

  return (
    <div className="ui grid container" key={id}>
      {Object.keys(product).length === 0 ? (
        <div>
          <h1>loading...</h1>
        </div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui four column stackable center aligned grid">
            <div className="ui vertical divider"></div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>

                <Link to={`/products/${id}`}>
                  <button type="button">ADD TO CART</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
