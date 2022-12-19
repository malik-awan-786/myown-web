import './Aboutcontact.css';
import React from 'react'
import card4 from "../images/cards10.png";
import card5 from "../images/cards9.png";
import { Link } from 'react-router-dom';
const Aboutcontact = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1> Who I am</h1>
            <p> I am Malik </p>
            <Link to = "/Contact" className='btn'>Contact
            </Link>
        </div>
        <div className='right'>
             <div  className='img-container'>
                <div className='img-top'>
                        <img src = {card4} className="img"/>
                </div>
                <div className='img-bottom '>
                        <img src = {card5} className="img"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutcontact
