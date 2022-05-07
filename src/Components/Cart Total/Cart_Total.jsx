import React, { useRef } from "react";
import "./Cart_Total.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
export const cartTotalAmount = cart => {
  let value = cart.reduce((amount, item) => item.price + amount, 0);
  return value;
};
export default function Cart_Total() {
  const { cart, user } = useSelector(state => state.data);
  const navigate = useNavigate();
  const handle = () => {
    if (cart.length === 0) {
      navigate("/");
    } else if (user) {
      navigate("/payment");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="ct_first_div">
      <p>
        SubTotal ({cart.length} items) : <CurrencyRupeeIcon />
        {cartTotalAmount(cart)}
      </p>
      <small className="ct_gift">
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button onClick={handle}>Proceed To Checkout</button>
    </div>
  );
}
