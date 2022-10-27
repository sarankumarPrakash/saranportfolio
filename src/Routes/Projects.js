import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import CommonBackground from '../Components/CommonBackground'
import Work from '../Components/Work'


const Projects = () => {
  return (
    <div>
      <Navbar />
      <CommonBackground
        heading="Projects"
        text="Some of my projects "
      />
      <Work/>
      <Footer />


    </div>
  )
}

export default Projects