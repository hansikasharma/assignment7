import React from 'react'
import '../styles/hero.css'
import girl from '../assets/girlimg.png'
import rocket from '../assets/rocket.png'
import Carousel from './Carousel'
const HeroSection = () => {
  return (
    <>
    <div className="hero-main">
        <div className="hero-con1">
            <div className="hero-img"><img src = {girl} /></div>
            <div className="hero-item"><h1>40% </h1>Achieved reduction in project execution time by optimizing team avialability</div>
            <div className="hero-item"><span><h1>$0.5</h1></span><span>MILLION</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
            <div className="hero-item1"><span><img  className = "rocket" src = {rocket} /></span><span><h1>10 Days</h1><p>Staff Deplyoment</p></span></div>
        </div>
        <div className="hero-con">
            <Carousel />
            <div className="cta-con"><div className="cta1">Explore More &rarr;</div></div>
        </div>
    </div>
    </>
  )
}

export default HeroSection