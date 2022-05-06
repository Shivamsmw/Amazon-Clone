import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Header from "./Components/Header/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useDispatch } from "react-redux";
import React from "react";
import { auth } from "./firebase";
import { freezeState } from "./redux/action";
import Product_Details from "./pages/Product Details/Product_Details";
import Checkout from "./pages/Checkout/Checkout";
import Payment from "./pages/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51KwMt6SH8TMfgzu2MYycyEEQRIy9d4kkLwOlGNvgXIyCY4gaZdojcyRSnyC3PBk18XSSs0HpHnDwVlcdMobaIikw00cGmLsMZp"
);
function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    auth.onAuthStateChanged(authuser => {
      if (authuser) {
        dispatch(freezeState(authuser));
      } else {
        dispatch(freezeState(null));
      }
    });
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Homepage />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/payment"
          element={
            <div>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </div>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/product/:id"
          element={
            <div>
              <Header />
              <Product_Details />
            </div>
          }
        />
        <Route
          path="/order"
          element={
            <div>
              <Header />
              <Checkout />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
