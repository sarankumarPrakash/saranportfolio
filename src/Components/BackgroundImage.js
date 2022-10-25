import './navbarStyle.css';
import React from 'react'
import Background  from '../images/background.jpeg';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';

const backgroundImage = () => {
  return (
    <div className='main'>
        <div className='img'>
         <img src={Background} className='image' />
        </div>
        <div className='content'>
            <p>My job is to make sure that as our customer's priorities change, as the environment changes, we shift that portfolio of products to meet them.</p>
            <h1> React Developer</h1>
            <div className='button'>
                <Link to='/explore' className='btn'> Projects</Link>
                <Link to ='/contact' className='btn-light'> Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default backgroundImage