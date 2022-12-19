import React from 'react'
import './Heropage.css'
import heropic from "../images/Laptop.jpg";
import { Link } from "react-router-dom";
const Heropage = () => {

  return (
    
    <div className='hero'>
      <div className="mask">
      <img className = " ma" src={heropic}  />
      </div>
      <div className='content'>
        <p>
          Hi I am Freelancer  
        </p>
        <h1>
          React Developer 
        </h1>
        <div >
           <Link to= "/Project" className='btn1'> Project</Link>
           <Link to= "/Contact" className='btn-light '> Contact</Link>
           </div>
      </div>

    </div>
  )
}

export default Heropage;
