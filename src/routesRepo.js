import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Repositories from "./pages/Repositories";
import Home from "./pages/Home";

export default function RoutesRepo() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/repositories' element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  );
}
