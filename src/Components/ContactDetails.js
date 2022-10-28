import '../Components/navbarStyle.css'
import React from 'react'
import { Paper, Box } from '@mui/material'
import { TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

const ContactDetails = () => {
    return (
        <Paper elevation={24} className='contact-header' >
            <div className=''>

                <div className='contact'>
                    <Box sx={{ '& > :not(style)': { m: 3 }, }}>
                        <TextField label="Your Name " variant="outlined" />
                    </Box>
                </div>

            </div>
        </Paper>
    )
}

export default ContactDetails