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
               <p> DHA phase 6 Lahore</p>
                <p> Pakistan</p>
                </div> 
                <div className='tk'>
                  <h4><FaPhone  size={20} style = {{color: "#fff", marginRight : "9rem", marginLeft : "2rem"}}/></h4>
                  <div>
                    <p> +92-41-4565429 </p> 
                    </div>
             </div>
             <div className=" tk">
                  <h4><FaMailBulk size={20} style = {{color: "#fff", marginRight : "2rem" }}/> </h4>
                  <div>
                  <p>mr760915@gmail.com </p>
                  </div>
             </div>
             </div>
             </div>
             <div className=" right">
              <div>
                  <h4> About me</h4>
                  <p> I am Malik Rizwan. I am Software Engineer. I created a project in React js</p>
             </div>
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
