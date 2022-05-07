import React from "react";
import "./Checkout_Product.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useDispatch } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { deleteFromCart } from "../../redux/action";
export default function Checout_Product({ id, title, image, rating, price }) {
  let dispatch = useDispatch();
  const removeCartItem = title => {
    dispatch(deleteFromCart(title));
  };
  return (
    <div className="cpro_main_div">
      <img className="cpro_image" src={image} alt="" />
      <div className="cpro_info">
        <p className="cpro_title">{title}</p>
        <p className="cpro_price">
          <strong>
            <CurrencyRupeeIcon />
          </strong>
          <strong>{price}</strong>
        </p>
        <div className="cpro_rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>
                <StarRateIcon sx={{ color: "yellow" }} />
              </p>
            ))}
        </div>
        <button onClick={() => removeCartItem(title)}>
          <i>
            <ShoppingCartIcon />
          </i>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}
