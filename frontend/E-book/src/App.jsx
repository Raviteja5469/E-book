import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import React from 'react'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
