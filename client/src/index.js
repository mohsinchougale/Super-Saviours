import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import HealthForm from "./components/HealthForm";
import Map from "./components/Map";
import Police from "./components/Police";
import Hospitals from "./components/Hospitals";
import MedicalReport from "./components/MedicalReport";
// import SOS from "./components/SOS";

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/signin" element={<App />} />
      <Route path="/health" element={<HealthForm />} />
      <Route path="/services" element={<Map />} />
      <Route path="/policestations" element={<Police />} />
      <Route path="/hospitals" element={<Hospitals />} />
      <Route path="/ghc" element={<HealthForm />} />
      <Route path="/umr" element={<MedicalReport />} />
      <Route path="/" element={<Home />} />
      {/* <Route path="/sos" element={<SOS />} /> */}
      {/* <Route path="/hospitals" element={<Hospitals />} />
      <Route path="/hospitals" element={<Hospitals />} />
      <Route path="/hospitals" element={<Hospitals />} /> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
