import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginInitiate } from "../../redux/action";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [password, setPass] = React.useState("");
  const [email, setEmail] = React.useState("");
  const { user } = useSelector(state => state.data);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  React.useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, dispatch, navigate]);
  const signIn = e => {
    e.preventDefault();
    dispatch(loginInitiate(email, password));
    setEmail("");
    setPass("");
  };
  return (
    <div className="login_main_div">
      <Link to="/">
        <img
          className="login_amazon_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt="amazon-logo"
        ></img>
      </Link>
      <div className="login_first_div">
        <h1>Sign In</h1>
        <form>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={e => setPass(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login_signIn_button"
          >
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's conditions of use and Privacy
          Notice.
        </p>
      </div>
      <p>New to Amazon?</p>
      <Link to="/register">
        <button className="login_register_button">
          Create Your Amazon Account
        </button>
      </Link>
    </div>
  );
}
