import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="ui fixed menu">
      <Link>
        <div>
          <div className="add-to-cart ">
            <span className="cart-count"></span>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
          </div>
        </div>
      </Link>
      <div className="ui container center ">
        <h1>Shopping App</h1>
      </div>
    </div>
  );
}

export default Header;
