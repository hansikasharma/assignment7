import React from 'react'
import './../styles/nav.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-main">
        <div className="nav">
            <div className="logo"><img src = {logo} /></div>
            <div className="nav-items">
                <div className = "nav-item"><div className="cta">Get Projects</div></div>
                <div className = "nav-item" ><Link to = "/register" ><div className="cta1">Onboard Talent</div></Link></div>

            </div>
            
        </div>
    </nav>
  )
}

export default Navbar