import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components//Navbar";
import Home from "./components/Home";
import Auth from "./components/Auth";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" exact element={<Auth />} />
        </Routes>
      </div>
    </Router>
    // <AppContainer>
    //   <AccountBox />
    // </AppContainer>
  );
}

export default App;
