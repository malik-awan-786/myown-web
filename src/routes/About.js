import React from 'react'
import './About.css';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import play from "../images/play.png";
import iphone from "../images/iphone.png";
import firstphoto from "../images/firstphoto.png";
import infect from "../images/infect.png";
const About = () => {
  return (
    <div>
        <Navbar/>
        {/* <div className='firstphoto'>
            <div className='texts2'>
            <div className='firstpic'> 
            Ready to take the 
             first photo? 
            <h1> <div className='line3'></div> </h1>
         </div>
         <div className='picstyle' >
         Download woundMend from the app store
         or goggle play now and start checking 
           your wounds..
        <div className='icons'>
            <h1> <img src={play}/></h1>
            <h1> <img src={iphone}/></h1>
            </div>
          
         </div>
      
            </div>
            <h1> <img src={firstphoto}/></h1>
            </div> */}
            <div className='News'>
       <div className='Newstext'>
        About us
       </div>
      </div>
      <div className='aboutus'>
      <div className='Newstext1' >
            About us
            <div className='line4'>
            </div>
            <div className='instant'>
            WoundMend is based in Australia and is known to provide instant wound assessment globally. WoundMend is a brainchild project of skin and wound specialist doctors, who aim to provide instant assessment within the comfort of your homes.
           state-of-the-art mobile application operates on Artificial Intelligence technology and helps you scan all sorts of rashes, wounds or pigments.
             </div>
            </div>
           
            <div className="img2"> <img  src={infect}/></div>
           
      </div>
      <div className='firstphoto'>
            <div className='texts2'>
            <div className='firstpic'> 
            Ready to take the 
             first photo? 
            <h1> <div className='line3'></div> </h1>
         </div>
         <div className='picstyle' >
         Download woundMend from the app store
         or goggle play now and start checking 
           your wounds..
           <div className='downloadapp'>
            <p className='buttonstyle'> Download WounnMend</p>
           </div>
        <div className='icons'>
            <h1> <img src={play}/></h1>
            <h1> <img src={iphone}/></h1>
            </div>
         </div>
            </div>
            <h1> <img src={firstphoto}/></h1>
            </div>
           
        <Footer/>
    </div>
  )
}

export default About
