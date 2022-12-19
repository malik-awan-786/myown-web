import './Dynamiccard.css';
import Dynamiccard from './Dynamiccard';
import Workdata from './Workdata'; 
import React from 'react'
const Workcard = () => {
  return (
    
    <div className='work-container'>
        <h1 className='Project-headig'> PROJECT</h1>
        <div className=' project-container'>
           {
           Workdata.map ((val )=> {
              return (
                <Dynamiccard
                imgsrc={val.imgsrc}
                title = {val.title}
                text = {val.text}
                veiw= {val.veiw}/ >
              );
            })
           }
           
            {/* <div className='project-card'>
                <img className = " " src=  {card2}/>
            </div>  */}

        </div>
      
    </div>
  )
}

export default Workcard























