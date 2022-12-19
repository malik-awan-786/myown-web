import './Heroimage.css';
import React from 'react'

function heroimage (props) {
  return (
    <div className='heroimage'>
     <div className="hd">
   <h4>{props.Heading}</h4>
   <p> {props.text}</p>
   </div>
    </div>
  )
}

export default heroimage
