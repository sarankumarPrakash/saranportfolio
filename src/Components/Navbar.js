import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import './navbarStyle.css'

const Navbar = () => {
  
   const [open , setOpen]=React.useState(false)
   const handleOpen=()=> setOpen(!open)
   const handleClose=()=>setOpen(!open)
   console.log(open);
  return (
    <div className='header'>
      <Link to ='/'> <h1>SaranKumar Prakash </h1></Link>
      <ul className={open === true?'nav-menu-active':'nav-menu'}>
        <li> <Link to ='/'> Home </Link></li>
        <li> <Link to ='/project'> Projects</Link></li>
        <li> <Link to ='/about'> About </Link></li>
        <li> <Link to ='/contact'> Contact Us</Link></li>
      </ul>

      <div className='menu-icon' >
        {
          open !== true  ?  <CloseIcon onClick={handleClose} style={{color:'rgb(31, 31, 146)' ,marginRight:'1rem'}} />
           :<MenuIcon onClick={handleOpen} style={{color:'rgb(31, 31, 146)',marginRight:'1rem'}}/>
        }
        
      </div>
    </div>
  )
}

export default Navbar