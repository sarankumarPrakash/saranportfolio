import './navbarStyle.css'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import {HomeIcon,PhoneAndroidIcon,EmailIcon} from '@mui/icons-material'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <div>
                            <h4 className='footer-text'> <HomeIcon sx={20} style={{ color: 'white' }} /></h4>
                        </div>
                        <div>
                            <h4>
                                <p className='footer-text'>Chennai</p>
                                <p className='footer-text'>Coimbatore</p>
                            </h4>
                        </div>

                    </div>
                    <div className='location'>
                        <div>
                            <h4 className='footer-text'> <EmailIcon sx={20} style={{ color: 'white' }} /></h4>
                        </div>
                        <div>
                            <h4>
                                <p className='footer-text'>info@gmail.com</p>
                              
                            </h4>
                        </div>

                    </div>
                    <div className='location'>
                        <div>
                            <h4 className='footer-text'> <PhoneAndroidIcon sx={20} style={{ color: 'white' }} /></h4>
                        </div>
                        <div>
                            <h4>
                                <p className='footer-text'>9876543210</p>
                            </h4>
                        </div>

                    </div>

                </div>
                <div className='right'>
                    {/* <h4 className='footer-text'>About the Company </h4>
                    <div>
                    <p className='footer-text'> lorem text </p>
                    </div> */}

                    <div className='social'>
                        <FacebookIcon sx={30} style={{ color: 'white' }} />
                        <LinkedInIcon sx={30} style={{ color: 'white' }} />
                        <WhatsAppIcon sx={30} style={{ color: 'white' }} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer