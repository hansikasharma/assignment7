import React from 'react'
import '../styles/regis.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "./../assets/logo.png"
const Register = () => {
  
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Validation: Check if the email is valid
      if (!isValidEmail(email)) {
        setError('Invalid email format');
        return;
      }
  
     
      setError('');
      navigate("/success");
  
      // Process form submission
      
      console.log('Email submitted:', email);
    };
  
    const isValidEmail = (email) => {
      // Basic email validation regex
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };
  console.log(error);
  return (
   <>
   <form onSubmit={handleSubmit}  >
   <div className='regis-main'>
    <Link to  = "/"><div class = "back-btn">
        <span>&#43;</span>

    </div></Link>
    <Link to = "/"><img src = {logo} className='logo1'/></Link>
    <div className="success-heading">Registration Form</div>
    <div className="success-text">Start your success Journey here!</div>
    <div className="input-main">
   <input type = "text" className = "input-txt" placeholder='Enter your Email'  onChange={handleEmailChange} />
   <input type = "text" className = "input-txt" placeholder='Enter your Name' onChange={(e) =>{setName(e.target.value)}} />
   {error && <div style={{ color: 'red' }}>{error}</div>}
   <button  type = "submit"className = {email? "cta1": "cta input-btn"} placeholder='Submit' >Submit</button>
   </div></div>
   </form>
   </>
   )
}

export default Register