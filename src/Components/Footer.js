import React from 'react'
import './Footer.css'
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, } from 'react-icons/fa'
const Footer = () => {
  return (
    
    <div>
      <footer className='container'>
        <div className='left'>
            <div className='location'>
            <h4><FaHome size={20} style = {{color: "#fff", marginRight : "2rem" }}/></h4>
                <div className='tk'>
                  <h4><FaPhone  size={20} style = {{color: "#fff", marginRight : "9rem", marginLeft : "2rem"}}/></h4>
             </div>
             <div className=" tk">
                  <h4><FaMailBulk size={20} style = {{color: "#fff", marginRight : "2rem" }}/> </h4>
             </div>
             </div>
             </div>
             <div className=" right">
             <div className=" Social">
             <FaFacebook size={20} style = {{color: "#fff", marginRight : "2rem" }}/>
             <FaTwitter size={20} style = {{color: "#fff", marginRight : "2rem" }}/>
             <FaLinkedin size={20} style = {{color: "#fff", marginRight : "2rem" }}/>
             </div>
             </div>
        </footer>
        </div>
  )
}

export default Footer
