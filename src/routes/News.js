import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './News.css';
import Workcard from '../Components/Workcard';
function News () {
  return (
    <div>
     <Navbar/>,
      {/* <Heroimage/> */}
      
      <div className='News'>
       <div className='Newstext'>
        News
       </div>
      </div>
      <div className='textss1'>
        <div  className='newsupdate'>
        <div>
        Our News
        </div>
        <div className='herenews'>
        Here's News And Articles From Us
        </div>
        <div className='line1'>
        </div>
        </div>
        <div className='lorem'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus eu odio aliquam vitae, laoreet odio aliquam consectetur adipiscing elit.
        </div>
       </div>
       <Workcard/>,
      <Footer/>
    
    </div>
  )
}

export default News