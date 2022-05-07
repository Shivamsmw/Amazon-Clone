import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { registerInitiate } from "../../redux/action";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [password, setPass] = React.useState("");
  const [email, setEmail] = React.useState("");
  const { user } = useSelector(state => state.data);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, dispatch, navigate]);

  const signUp = e => {
    e.preventDefault();
    dispatch(registerInitiate(email, password));
    setEmail("");
    setPass("");
  };
  return (
    <div className="register_main_div">
      <Link to="/">
        <img
          className="register_amazon_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt="amazon-logo"
        ></img>
      </Link>
      <div className="register_first_div">
        <h1>Create Account</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <h5>password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPass(e.target.value)}
          />
          <button
            type="submit"
            onClick={signUp}
            className="register_continue_button"
          >
            Continue
          </button>
          <div className="register_login_main">
            <p>Already have an account?</p>
            <Link to="/login" className="register_signIn_text">
              <p>Sign In</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
