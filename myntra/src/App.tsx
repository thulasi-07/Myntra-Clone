import React from "react";
import Main from "./components/Banner";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  );
}

export default App;
