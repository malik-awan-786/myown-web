
import React from 'react'
import './Footer.css';
// import { FaBars, FaTimes} from 'react-icons/fa';
import logo from "../images/logo.png";
// import { Link } from 'react-router-dom'
import play from "../images/play.png";
import iphone from "../images/iphone.png";
import {FaInstagram} from 'react-icons/fa';
import {CiFacebook} from 'react-icons/ci';
const Footer = () => {
  return (
   
       <footer className='footer' >
        <div className='footer-container'>
          <div className='footerstyle'>
        <div className='picstyle1'>
           <h1><img className="logo" src={logo}/></h1>
          <div className='icons'>
            <h1> <img src={play}/></h1>
            <h1> <img src={iphone}/></h1>
            </div>
            </div>
          <div className='company'>
            <div >
              <h1>
              COMPANY
              </h1>
              <p>
                About Us 
              </p>
              <p> Term and Consitions</p>
              <p>
              Privacy Policy
              </p>
            </div>
            <div >
              <h1>
              SUPPORT
              </h1>
              <p>
              FAQS
              </p>
              <p> Contact Us</p>
              <p>
              Instructions for use
              </p>
            </div>
            <div >
              <h1>
              FOLLOW
              </h1>
              <p>
              <div className='iconstyle'>
              <CiFacebook/>
              <FaInstagram/>
              </div>
              </p>
            </div>
            
        </div>
        </div>
     </div>
    </footer>
    
  )
}

export default Footer
