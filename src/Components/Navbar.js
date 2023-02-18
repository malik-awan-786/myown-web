

import './Navbar.css';
import { FaBars, FaTimes} from 'react-icons/fa';
import logo from "../images/logo.png";
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [click, setClick] = useState( 0);
  const handleClick = () => setClick (!click);
  return (
   
       <header className='header' >
        <div>
           <h1><img className="logo" src={logo}/></h1>
          </div>
          <div>
        <ul className={  click ?  'menu active' : 'menu'}>
        <li>
        <Link to="/" className='men'> Home</Link>
        </li>  
        <li>
        <Link to="/news" className='men'> News </Link>
        </li>
        <li>
       <Link to="/about" className='men'> AboutUs</Link>
        </li>
        <li>
       <Link to="/support" className='men'> Support</Link>
        </li>
        <li>
        <Link to="/login" className='men'> <button> Login </button> </Link>
        </li>
        </ul>
        </div>
        <div className="hamburger"  onClick={handleClick} >
          { click ?   (<FaTimes/>) : ( <FaBars/>) }
        </div>
    </header>
    
  )
}

export default Navbar
