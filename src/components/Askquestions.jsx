import React from 'react'
import '../styles/faq.css'
import { useState } from 'react';
const Askquestions = ({faq}) => {
    const [openIndex, setOpenIndex] = useState(null);
    const [index, setIndex] = useState(0);
    const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    };

  return (
  <>
  
  <div className="ask-con-que-main"><div className='ask-con-que'><sapn>{faq.question}</sapn> <span className={openIndex && "cross"} onClick={()=>{toggleAnswer(!index)}}>&#43;</span></div>
      <div className={openIndex?("ask-con-ans active"):("ask-con-ans") }>{faq.answer}
    </div></div>
  </>
  )
}

export default Askquestions;