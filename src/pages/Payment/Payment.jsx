import React from "react";
import "./Payment.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { db } from "../../firebase";
import { useElements } from "@stripe/react-stripe-js";
import { useStripe } from "@stripe/react-stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import Checout_Product from "../../Components/Checkout Product/Checout_Product";
import { cartTotalAmount } from "../../Components/Cart Total/Cart_Total";
import axios from "../../utility/axios";
import { emptyCart } from "../../redux/action";
import { Alert } from "@mui/material";
export default function Payment() {
  const { cart, user } = useSelector(state => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePayment = e => {
    e.prevenrDefault();
  };
  const finalPay = () => {
    if (cart.length > 0) {
      dispatch(emptyCart());

      alert(" Congratulations! Your order is confirmed");
      navigate("/");
    } else {
      alert("Sorry! Your Cart is empty Please Select some products to buy");

      navigate("/");
    }
  };
  const handleSubmit = () => {};
  return (
    <div className="payment_main_div">
      <div className="payment_sumain_div">
        <h1>Checkout {<Link to="/order">{cart.length} items</Link>}</h1>
        <div className="payment_box">
          <div className="title_payment">
            <h3>Delivery Address</h3>
          </div>
          <div className="address_payment">
            <p>{user && user.email}</p>
            <p>House No. 13/144, R.K. Puram 2, Agra Road</p>
            <p>Aligarh, Uttar Pradesh, India</p>
          </div>
        </div>
        <div className="payment_box">
          <div className="title-payment">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment_products">
            {cart &&
              cart.map(item => (
                <Checout_Product
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
          </div>
        </div>
        <div className="payment_box">
          <div className="title_payment">
            <h3>Payment Method</h3>
          </div>
          <div className="details_payment">
            <form onSubmit={handlePayment}>
              <CardElement onChange={handleSubmit} />
              <div className="price_payment">
                <CurrencyFormat
                  renderText={value => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={cartTotalAmount(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rs"}
                />
                <button onClick={finalPay}>
                  <span>Buy Now</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
