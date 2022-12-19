import './Card.css';
import React from 'react'
import { Link } from 'react-router-dom';
// import car1 from './ComponentsWorkdata
const Card = (props) => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>  - Basic - </h3>
                <p> {props.forget}</p>
             <span className='bar'> </span>
                <p className='btc' > $ 90 </p>
                <p> - 3 Days - </p>
                <p> - 3 Pages- </p>
                <p> - 3 Features - </p>
                <p> - Resposive Design- </p>
                <Link to = " " className='btn'> PURCHASE NOW</Link>
    </div>
        <div className='card'>
                <h3>  - Premium - </h3>
                <span className='bar'></span>
                <p className='btc' > $ 200 </p>
                <p> - 2 Days - </p>
                <p> - 5 Pages- </p>
                <p> - 3 Features - </p>
                <p> - Resposive Design- </p>
                <Link to = "/Contact " className='btn'> PURCHASE NOW</Link>
            </div>
            <div className='card'>
                <h3>  - Basiness - </h3>
                <span className='bar'></span>
                <p className='btc' > $ 300 </p>
                <p> - 5 Days - </p>
                <p> - 8 Pages- </p>
                <p> - 3 Features - </p>
                <p> - Resposive Design- </p>
                <Link to = "/Contact " className='btn'> PURCHASE NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default Card
