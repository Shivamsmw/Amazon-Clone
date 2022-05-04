import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";

import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
export default function Product({
  id,
  title,
  image,
  price,
  rating,
  specification,
  detail,
}) {
  return (
    <div className="product_main_div">
      <div className="product_details">
        <Link to={`/products/` + id} className="product_title">
          <p>{title}</p>
        </Link>
        <p className="product_price">
          <strong>$ </strong>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>
                <StarRateIcon sx={{ color: "yellow" }} />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="image" className="product_view"></img>
      <button>
        <i>
          <ShoppingCartCheckoutOutlinedIcon />
        </i>
        ADD TO CART
      </button>
    </div>
  );
}
