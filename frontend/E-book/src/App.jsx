import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import React from "react";
import Honars from "./pages/Honars/Honars";
import Product from "./pages/Product/Product";
import AuthForm from "./components/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/honors" element={<Honars />} />
        <Route path="/product" element={<Product />} />
        {/* Use AuthForm instead of separate SignIn and SignUp */}
        <Route path="/sign-in" element={<AuthForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
