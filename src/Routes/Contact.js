import React from 'react'
import CommonBackground from '../Components/CommonBackground'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import ContactDetails from '../Components/ContactDetails'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <CommonBackground 
      heading="Get in Touch !!! "
      text=" Although I’m  currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!" />
      <ContactDetails />
      <Footer />
    </div>
  )
}

export default Contact