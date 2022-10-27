import React from 'react'
import CommonBackground from '../Components/CommonBackground'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <CommonBackground 
      heading="Contact "
      text=" we can chat here !!!" />
      <Footer />
    </div>
  )
}

export default Contact