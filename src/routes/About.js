import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Heroimage from '../Components/Heroimage';
import Aboutcontact from '../Components/Aboutcontact';
function About() {
  return (
    <div>
      <Navbar/>,
      <Heroimage Heading = " ABOUT." text = " I am Frindly Frontend Developer" />
      <Aboutcontact/>,
      <Footer/>,
    </div>
  )
}

export default About