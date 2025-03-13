import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import React from 'react'
import Honars from './pages/Honars/Honars'
import Product from './pages/Product/Product'
import {SignIn,SignUp} from './components/Signin/Signin'

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/honors" element={<Honars />} />
            <Route path="/product" element={<Product />} /> 
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
