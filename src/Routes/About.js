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
      heading="About Me" 
      text ="Innovative task driven professional with 1 + experience in web development across diverse Industries. Equipped with record success in providing the technical need of the companies. Proficient in clearing bugs, troubleshooting the small (or)
       complex issues and implementing few feature based on client's feedback."/>
       <WorkExperinece/>
      <Footer/>

    </div>
  )
}

export default About