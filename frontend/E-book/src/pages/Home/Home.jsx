import React from 'react'
import { useState, useEffect } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Hero from "../../components/Hero/Hero";
import Benifits from '../../components/Benfits/Benifits';
import Footer from '../../components/Footer/Footer';
import Chapters from '../../components/Chapters/Chapters';

const Home = () => {
  return (
    <div>
      <div className='home-container'>
      <Navbar />
      <Hero/>
      <Benifits/> 
      {/* <Features/> */}
      <Chapters/>
      {/* <Achievements/>
      <Contact/> */}
      <Footer/>
    </div>
    </div>
  )
}

export default Home
