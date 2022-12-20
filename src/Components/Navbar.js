

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
        <Link to= "/" className='men'> Home</Link>
        </li>  
        <li>
        <Link to= "/Project" className='men'> Project</Link>
        </li>
        <li>
       <Link to= "/Contact" className='men'> Contact</Link>
        </li>
        <li>
        <Link to= "/About" className='men'> About</Link>
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
