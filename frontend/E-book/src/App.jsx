import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import React from 'react'
import Honars from './pages/Honars/Honars'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/honors" element={<Honars />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
