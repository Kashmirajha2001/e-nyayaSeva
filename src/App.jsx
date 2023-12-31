import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/login";
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <>
      <BrowserRouter basename="/e-nyayaSeva">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          {/* <Route path="*" element={<div>Error</div>} /> */}
        </Routes>
      </BrowserRouter>
      {/* <Home/> */}
    </>
  );
}

export default App;
