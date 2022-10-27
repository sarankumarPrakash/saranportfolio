import './navbarStyle.css'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import Image from '../images/images.webp'

import { Link } from 'react-router-dom';

const Work = (props) => {
    return (
        <div className='work-container'>
            <div className='project-container'>
                <div className='project-card'>
                    <Card sx={{ maxWidth: 445 }} className="card">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={Image}
                                alt="green iguana"
                            />
                            <CardContent>
                                <h2>Lizard</h2>
                                <p>  Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica</p>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to='' className='wrk-btn' > View </Link>
                            <Link to='' className='wrk-src' style={{ marginLeft: '7.5rem' }}> Source </Link>
                        </CardActions>
                    </Card>


                    <Card sx={{ maxWidth: 445 }} className="card">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={Image}
                                alt="green iguana"
                            />
                            <CardContent>
                                <h2>Lizard</h2>
                                <p>  Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica</p>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to='' className='wrk-btn' > View </Link>
                            <Link to='' className='wrk-src' style={{ marginLeft: '7.5rem' }}> Source </Link>
                        </CardActions>
                    </Card>


                    <Card sx={{ maxWidth: 445 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={Image}
                                alt="green iguana"
                            />
                            <CardContent>
                                <h2>Lizard</h2>
                                <p>  Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica</p>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to='' className='wrk-btn' > View </Link>
                            <Link to='' className='wrk-src' style={{ marginLeft: '7.5rem' }}> Source </Link>
                        </CardActions>
                    </Card>


                </div>
            </div>
        </div>
    )
}

export default Work