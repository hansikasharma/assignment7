import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/home.css'
import HeroSection from '../components/HeroSection'
import Askquestions from '../components/Askquestions'
import Footer from '../components/Footer'
import '../styles/faq.css'
const HomePage = () => {
  const faqs = [
    {
      question:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tenetur veritatis impedit. Tempora officiis explicabo non provident molestias voluptatum quisquam?"
    },
    {
      question:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tenetur veritatis impedit. Tempora officiis explicabo non provident molestias voluptatum quisquam?"
    },
    {
      question:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tenetur veritatis impedit. Tempora officiis explicabo non provident molestias voluptatum quisquam?"
    },
    {
      question:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tenetur veritatis impedit. Tempora officiis explicabo non provident molestias voluptatum quisquam?"
    },
    {
      question:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tenetur veritatis impedit. Tempora officiis explicabo non provident molestias voluptatum quisquam?"
    }
    
  ]
  return (
    <>
    <Navbar />
    <div className="success-stories">
        <div className="success-heading">Success Stories</div>
        <div className="success-text">Every success journey we've encountered.</div>
    </div>
    
    <HeroSection />
    <div className="ask-main">
    <div className="ask-con">
        <div className='ask-con-cur'>What's on you mind</div>
        <div className="ask-con-bold">Ask Questions</div>
        <div className="ask-con-img"></div>
    </div>
    <div className="ask-con">
      {faqs.map((faq,index) => (<Askquestions faq = {faq} />))}
    </div>
   </div>
   <Footer />
    </>
  )
}

export default HomePage