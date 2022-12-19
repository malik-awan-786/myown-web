

import './Navbar.css';
import { FaBars, FaTimes} from 'react-icons/fa';

import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [click, setClick] = useState( 0);
  const handleClick = () => setClick (!click);
  return (
    <div>
    <header
    className='header' >
        <h1> Portfolio</h1>
        <ul className={  click ?  'menu active' : 'menu'}> 
        <li>
       <Link to= "/Contact"> Contact</Link>
        </li>
        <li>
        <Link to= "/About"> About</Link>
        </li>
        <li>
        <Link to= "/Project"> Project</Link>
        </li>
        <li>
        <Link to= "/"> Home</Link>
        </li> 
        </ul>
        <div className="hamburger"  onClick={handleClick} >
          { click ?   (<FaTimes/>) : ( <FaBars/>) }
        </div>
    </header>
    </div>
  )
}

export default Navbar
