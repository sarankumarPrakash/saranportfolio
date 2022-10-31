import '../Components/navbarStyle.css'
import React from 'react'
import { TextField, Autocomplete,Grid } from '@mui/material';


const ContactDetails = () => {
    const option = [
        { label: 'Software Development', value: 'Software Development' },
        { label: 'Web Development ', value: 'Web Development ' },
        { label: 'others', value: 'others' }
    ]
    return (

        <div className='main-contact'>
            <div className='contact-left'>
                <h1>Let's we connect ..</h1>
            </div>
            <div className='contact-right'>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <TextField
                            style={{ marginLeft: '30%',marginBottom:'2%' }}
                            sx={{ width: 250 }}
                            id="standard-multiline-flexible"
                            label="First Name "
                            name="name"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            className='text-filed'
                            sx={{ width: 250 }}
                            id="standard-multiline-flexible"
                            label="Last Name "
                            name="name"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            style={{ marginLeft: '30%',marginBottom:'2%' }}
                            id="standard-multiline-flexible"
                            label="Your Email "
                            sx={{ width: 250 }}
                            name="name"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Autocomplete
                            className='text-filed'
                            disablePortal
                            id="combo-box-demo"
                            options={option}
                            sx={{ width: 250 }}
                            renderInput={(params) => <TextField {...params} label="What i want to do "  variant="standard"/>}
                        />
                    </Grid>
                </Grid>

                <div>
                    <TextField
                        style={{marginLeft:'15%',marginBottom:'2%'}}
                        className='text-filed'
                        sx={{ width: 600 }}
                        id="standard-multiline-static"
                        label="Your message or Suggestion"
                        multiline
                        rows={5}
                        // defaultValue="Default Value"
                        variant="standard"
                    />
                </div>




            </div>

        </div>

    )
}

export default ContactDetails