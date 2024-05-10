import React from 'react'
import '../styles/success.css'
import logo from '../assets/logo.png'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Success = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/'); 
    }, 5000);

  }, []);
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [counter]);
  return (
    <>
    <img src= {logo} className='logo1' />
    <div className='success-main'>
      <div className="tick"><span>&#10003;</span></div>
      <div className='success-heading'>Success Submitted</div>
      <div className="success-text">Congratulations</div>
      <div className='success-text1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum nobis explicabo doloribus quibusdam tempora eaque velit! Rem quisquam facilis vel!</div>
      <div className='timer'>Redirecting you to HomePage in <b>{counter} seconds</b></div>
    </div>
    </>
  )
}

export default Success
