import React from "react";
import Main from "./components/Banner";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Details from "./components/Details";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/details" element={<Details/>}/>
    </Routes>
    </>
  );
}

export default App;
