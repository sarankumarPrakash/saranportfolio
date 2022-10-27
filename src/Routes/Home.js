import React from 'react'
import Navbar from '../Components/Navbar'
import BackgroundImage from '../Components/BackgroundImage'
import Footer from '../Components/Footer'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

const Home = () => {
  return (
    <div>
      <Navbar />
      <BackgroundImage />
      
     
      <Footer/>
    </div>
  )
}

export default Home