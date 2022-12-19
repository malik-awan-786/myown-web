import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Heroimage from '../Components/Heroimage';
// import Dynamiccard from '../Components/Dynamiccard';
import Workcard from '../Components/Workcard';
import Card from '../Components/Card';
function Project() {
  return (
    <div>
     <Navbar/>,
     <Heroimage Heading="PROJECTS" text= "Some of my most recents Work" />,
     <Workcard/>,
      <Card/>,
      <Footer/>,
    </div>
  )
}

export default Project