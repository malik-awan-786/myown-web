

import './Navbar.css';
import { FaBars, FaTimes} from 'react-icons/fa';
import logo from "../images/logo.png";
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [click, setClick] = useState( 0);
  const handleClick = () => setClick (!click);
  return (
   
    <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 ">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
      <h1><img className="logo" src={logo}/></h1>
      </a>
      <ul class="nav nav-pills">
        <li class="nav-item"><Link to="/" class="nav-link active" >Home</Link></li>
        <li class="nav-item"><Link to="/News" class="nav-link">News</Link></li>
        <li class="nav-item"><Link to="/about"  class="nav-link"> About us </Link></li>
        <li class="nav-item"><Link to="/Support"  class="nav-link"> Support </Link></li>
        <li class="nav-item"><Link to="/login" class="nav-Link" > <button class="btn btn-success">SignIn </button> </Link></li> 
      </ul>
    </header>
    <div className="hamburger"  onClick={handleClick} >
        { click ?   (<FaTimes/>) : ( <FaBars/>) }
       </div>
  </div>

    //    <header className='header' >
    //     <div>
    //      
    //       </div>
    //       <div>
    //     <ul className={  click ?  'menu active' : 'menu'}>
    //     <li>
    //    
    //     </li>  
    //     <li>
    //     <Link to="/news" > News </Link>
    //     </li>
    //     <li>
    //    <Link to="/about" className='men'> AboutUs</Link>
    //     </li>
    //     <li>
    //    <Link to="/support" className='men'> Support</Link>
    //     </li>
    //     <li>
    //     <Link to="/login" > <button class="btn btn-primary">SignIn </button> </Link>
    //     </li>
    //     <li>
    //     <Link to="/login" > <button class="btn btn-primary" >Signup</button></Link>
    //     </li>
    //     </ul>
    //     </div>
    //    
    // </header>
    
  )
}

export default Navbar
