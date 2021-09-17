import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeselectedProduct,
  addcart,
} from "../redux/actions/productAction";

function Addtocart() {
  let product = useSelector((state) => state.cart);

  const { image, title, price, category, description } = product;

  const { cartId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchproductdetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${cartId}`)
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(addcart(response.data));
  };

  useEffect(() => {
    if (cartId && cartId !== " ") fetchproductdetail();
    return () => {
      dispatch(removeselectedProduct());
    };
  }, [cartId]);

  return (
    <div className="ui grid container">
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
                <h2>
                  <a className="ui teal tag label">Total ${price}</a>
                </h2>
                {/* <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Addtocart;
