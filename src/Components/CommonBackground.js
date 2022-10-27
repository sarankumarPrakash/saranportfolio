import './navbarStyle.css';
import React from 'react'

const CommonBackground = (props) => {
  return (
    <div className="h-image">
      <div className='h-heading'>
        <h1 className='head'>{props.heading} </h1>
        <p className='head'>{props.text}</p>
      </div>
    </div>
  )
}

export default CommonBackground;