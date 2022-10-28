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
        heading="Some of my Recents projects"
        // text="Some of my Recents projects "
      />
      <Work/>
      <Footer />


    </div>
  )
}

export default Projects