import React from 'react'
import './Small.css';
import { Link } from "react-router-dom";
function Small() {
    return (
        <div >
        <h1 className='text'> A Wound Neglected Is A Wound Infected
        <div className='line'>
        </div>
        </h1>
        <div className='h2'>
        WoundMend offers instant assessment of acute and chronic wounds. The state-of-the-art mobile application 
        operates on Artificial Intelligence technology and helps you scan all sorts of rashes, wounds or pigments.
        With the data obtained from your skin analysis, 
        WoundMend suggests possible predictions and 
        outcomes.
        <div >
           <Link to= "/Sigin" className='btn1'> Sign in</Link>
           <Link to= "/Sign up" className='btn1'> Sign up</Link>
           </div>
           <div>
          <div className='tx'>
          Our Doctor
          </div>
          <div className='tx1'>
          WoundMend Service 
          </div>
          <div className='tx2'>
          WoundMend helps you scan and detect all sorts of wounds for possible predictions
          <div className='line1'>
          </div>
          </div>
          <div>
          <div className='tx3'>
          Step 1
          <div>
          Step 2
          <div>
            Step 3
          </div>
          </div>
          </div>
          <div className='text1'>
          <div className='text2'>
          Download the WoundMend mobile app, available both for Android and ioS platforms. 
          </div>
          <div className='text3'>
          Point your phone camera towards the concerned part of the skin. Our app will investigate your injury through the use of our qualified database and high-tech machine learning along with clinically validated algorithm.
          </div>
          <div className='text4'>
          Wait for WoundMend to determine the type and nature of your wound for a whole list of predictions in no time.
          </div> <div className='jk'>
          Why WoundMend? 
          <div className='kj'>
          Wounds are a breach on your skin; that is the largest organ on human body. Popular statistics reveal that almost 1 to 2 % of the population will experience a chronic wound during their lifetime in developed countries.
          If not properly cared for, wounds have a susceptibility to get infected. WoundMend offers timely assessment of your wound, that can assist in your treatment decisions.
          <br/>If not properly cared for, wounds have a susceptibility to get infected. WoundMend offers timely assessment of your wound, that can assist in your treatment decisions.
          </div>
          
          </div>
          </div>
          
          </div>
          </div>
          </div> 
        </div>
     
      )
    }
    export default Small