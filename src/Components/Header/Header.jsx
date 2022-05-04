import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutInitiate } from "../../redux/action";
export default function Header() {
  const { user } = useSelector(state => state.data);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    if (user) {
      dispatch(logoutInitiate());
    }
  };
  return (
    <nav className="header_main">
      <Link to="/">
        <img
          className="amazon_header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="amazon-logo"
        ></img>
      </Link>
      <div style={{ color: "white", position: "relative", right: "20px" }}>
        .in
      </div>
      <div className="second_div_header">
        <LocationOnOutlinedIcon />
      </div>
      <div className="third_div_header">
        <span className="third_div_header1">Hello </span>
        <span className="third_div_header2">Select Your Address</span>
      </div>
      <div className="searchBox_header">
        <select id="searchBox_header_select">
          <option>All</option>
        </select>
        <input type="text" className="searchBox_header_inputbox" />
        <SearchOutlinedIcon className="search_header" />
      </div>
      <div className="authentication_div">
        <Link to={user ? "/" : "/login"} className="auth_link_header">
          <div onClick={handleSignOut} className="third_div_header">
            <span className="third_div_header1">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="third_div_header2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/order" className="auth_link_header">
          <div className="third_div_header">
            <span className="third_div_header1">Returns</span>
            <span className="third_div_header2">& Orders</span>
          </div>
        </Link>
        <Link to="/login" className="auth_link_header">
          <div className="third_div_header">
            <span className="third_div_header1">Your</span>
            <span className="third_div_header2">Prime</span>
          </div>
        </Link>
        <Link to="/order" className="auth_link_header">
          <div className="header_cart_div">
            <ShoppingCartCheckoutOutlinedIcon />
            <span className="header_cart_div_count">0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
