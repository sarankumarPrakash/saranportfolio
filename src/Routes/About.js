import React from 'react'
import CommonBackground from '../Components/CommonBackground'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'


const About = () => {
  return (
    <div>
      <Navbar/>
      <CommonBackground 
      heading="About Me" 
      text ="FrontEnd Developer"/>
      <Footer/>

    </div>
  )
}

export default About