
import './Dynamiccard.css';
import React from 'react'
import { NavLink } from 'react-router-dom';
const Dynamiccard = (props) => {
  return (
    <div className='project-card'>
    <img src=  {props.imgsrc}  />
    <h2 className='project-title'>  { props.title}</h2>
    <div className='pro-detail'>
        <p> {props.text }</p>
        <div className='pro-btns'>
            <NavLink to=  {props.veiw} className="btn"> Veiw</NavLink>
            <NavLink to= " url.com" className="btn"> Source</NavLink>
        </div>
</div>
</div>

  )
}

export default Dynamiccard
