import React from 'react'
import { useState, useEffect } from 'react';
const Carousel = () => {
  const slides =  [
   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim",
   "dolorem, iusto itaque corporis illo, tenetur ducimus voluptatum laboriosam quam iure.",
    "Nesciunt doloribus, assumenda repudiandae itaque vel distinctio commodi quam!"
   
  ]
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

 
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
          <>
          {slides.map((slide, index) => (
          <div
            key={index}
            className={index === currentSlide ? 'hero-carousel active' : 'hero-carousel'}
          >
            {slide}
          </div>
        ))}
          <div className="hero-carousel-buttons">
          {slides.map((_, index) => (
          <div
            key={index}
            className={index === currentSlide ? 'dot active' : 'dot'}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
             
              </div>
          </>  
            
  )
}

export default Carousel