//App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Bollywood from "./components/Bollywood";
import Hollywood from "./components/Hollywood";
import Technology from "./components/Technology";
import Fitness from "./components/Fitness";
import Food from "./components/Food";
import Details from "./components/Details";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/hollywood" element={<Hollywood />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/food" element={<Food />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
