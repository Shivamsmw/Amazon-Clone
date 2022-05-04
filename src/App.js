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
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
