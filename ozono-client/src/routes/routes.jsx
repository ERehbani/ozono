import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../screens/register";
import Login from "../screens/login";
import Home from "../screens/home";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="" element={<Home />} />
    </Routes>
  );
}


