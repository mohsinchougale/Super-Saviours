import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin, signup } from "../actions/auth";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);

    if (isSignUp) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => setIsSignUp((prevIsSignUp) => !prevIsSignUp);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <>
            <input
              name="firstName"
              value={formData.firstName}
              placeholder="First Name"
              onChange={handleChange}
            />
            <input
              name="lastName"
              value={formData.lastName}
              placeholder="Last Name"
              onChange={handleChange}
            />
          </>
        )}
        <input
          name="email"
          value={formData.email}
          placeholder="Email Address"
          onChange={handleChange}
          type="email"
        />
        <input
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
          type="password"
          autoComplete="on"
        />

        {isSignUp && (
          <input
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Repeat Password"
            onChange={handleChange}
            type="password"
            autoComplete="on"
          />
        )}

        <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
      </form>
      <button onClick={switchMode}>
        {isSignUp
          ? "Already have an account? Sign In"
          : "Don't have an account Sign Up"}
      </button>
    </div>
  );
};

export default Auth;
