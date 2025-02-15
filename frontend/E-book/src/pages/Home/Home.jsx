import React from 'react'
import { useState, useEffect } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <div className='home-container'>
      <Navbar />
      <Hero/>
      {/* <Features/>
      <Chapters/>
      <Achievements/>
      <Contact/>
      <Footer/> */}
    </div>
    </div>
  )
}

export default Home
