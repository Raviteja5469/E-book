import React from 'react'
import { useState, useEffect } from 'react'
import './Home.css'
import Navbar from '../../components/Pricing/Navbar'
import Hero from "../../components/Hero/Hero";
import Benifits from '../../components/Benfits/Benifits';
import Footer from '../../components/Footer/Footer';
import Chapters from '../../components/Chapters/Chapters';
import Pricing from '../../components/Pricing/Pricing';
import Authors from '../../components/Authors/Autors';
import Achievements from '../../components/Achievements/Achievements';
import Cta from '../../components/Cta';

const Home = () => {
  return (
    <div>
      <div className='home-container'>
      <Navbar />
      <Hero/>
      <Benifits/> 
      {/* <Features/> */}
      <Chapters/>
      {/* 
      <Contact/> */}
      <Achievements/>
      <Pricing/>  
      <Authors/>
      <Cta/>
      <Footer/>
    </div>
    </div>
  )
}

export default Home
