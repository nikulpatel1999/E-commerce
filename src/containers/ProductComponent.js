import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function ProductComponent() {
  const products = useSelector((state) => state.allproducts.product);
  // const { id, title } = products[0];

  const renderlist = products.map((product) => {
    const { id, price, title, category, image } = product;
    return (
      <div className="four column wide" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">${price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={`/products/${id}`}>
          <button type="button">ADD TO CART</button>
        </Link>
      </div>
    );
  });

  return <>{renderlist}</>;
}

export default ProductComponent;
