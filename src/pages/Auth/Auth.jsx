import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, signup } from "../../actions/auth";
import loginLogo from "../../assets/Vignan_logo.png";
import AboutAuth from "./AboutAuth";
import "./Auth.css";
const Auth = () => {
  const [isSignup, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignUp(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("enter email and password");
    }
    if (isSignup) {
      if (!name) {
        alert("enter the name");
      }
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
  };
  return (
    <section className="auth-section">
      {isSignup && <AboutAuth />}
      <div className="auth-container-2">
        {!isSignup && (
          <img src={loginLogo} width ="50px"alt="ask vignan" className="login-logo" />
        )}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>

          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {isSignup && <p style={{ color: "#007ac6" }}>Forgot password?</p>}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {isSignup && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                password must contain atleast 8 <br /> characters including
                atleast 1 number and 1 <br />
                letter
              </p>
            )}
          </label>
          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p style={{ fontSize: "13px" }}>
                Opt-in to receive occasional, <br /> product updates, user
                research invitaion <br /> company announcements and digests.
              </p>
            </label>
          )}

          <button type="submit" className="auth-btn">
            {isSignup ? "Sign up" : "Login"}
          </button>
          {isSignup && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              by clicking "sign up" you agree to our
              <span style={{ color: "#007ac6" }}>
                terms of <br />
                services
              </span>
              ,<span style={{ color: "#007ac6" }}> privacy policy</span>,
              <span style={{ color: "#007ac6" }}> cookie policy</span>
            </p>
          )}
        </form>
        <div style={{ display: "flex" }}>
          <p style={{ margin: "0px" }}>
            {isSignup ? "Already have an account?" : "Don't have an account?"}
          </p>
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignup ? "Login" : "Sign up"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Auth;
