import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import React from 'react'
import Honars from './pages/Honars/Honars'
import Product from './pages/Product/Product'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/honors" element={<Honars />} />
          <Route path="/product" element={<Product />} />  

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
