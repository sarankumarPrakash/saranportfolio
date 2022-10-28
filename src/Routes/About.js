import React from 'react'
import CommonBackground from '../Components/CommonBackground'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import WorkExperinece from '../Components/WorkExperinece'



const About = () => {
  return (
    <div>
      <Navbar/>
      <CommonBackground 
      heading="Hii ..  Im Sarankumar Prakash" 
      />
       <WorkExperinece/>
      <Footer/>

    </div>
  )
}

export default About