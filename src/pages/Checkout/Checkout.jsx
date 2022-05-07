import React from "react";
import "./Checkout.css";
import Checout_Product from "../../Components/Checkout Product/Checout_Product";
import { useSelector } from "react-redux";
import Cart_Total from "../../Components/Cart Total/Cart_Total";
export default function Checkout() {
  const { user, cart } = useSelector(state => state.data);
  return (
    <div className="cp_main_div">
      <div className="cp_first_div">
        <div style={{ margin: "5px" }}>
          <h3>Hello! {user ? user.email : "Anonymous"}</h3>
          <h2 className="cp_title">
            {cart.length === 0
              ? "Your Shopping Cart is Empty"
              : "Your Shopping Cart:-"}
          </h2>
          {cart.length > 0 &&
            cart.map(item => (
              <Checout_Product
                key={item.id}
                id={item.it}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            ))}
        </div>
      </div>
      <div className="cp_second_div">
        {cart.length > 0 ? <Cart_Total /> : ""}
      </div>
    </div>
  );
}
