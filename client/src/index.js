import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { SignupForm } from "./components/accountBox/signupForm";
import { LoginForm } from "./components/accountBox/loginForm";
import Home from "./components/Home";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/signin" element={<App />} />
      {/* <Route path="/signin" element={<LoginForm />} /> */}
      {/* <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} /> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
