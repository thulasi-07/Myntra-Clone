import React from "react";
import Main from "./components/Banner";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/products" element={<Products/>}/>
    </Routes>
    </>
  );
}

export default App;
