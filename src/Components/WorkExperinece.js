import './navbarStyle.css'
import { Link } from 'react-router-dom'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Paper } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import * as React from 'react';
// import Paper from '@mui/material/Paper';


const WorkExperinece = () => {
    return (
        <div className='work-header'>
            <div className='link-header'>
                {/* <Link to='' className='btn-light-wrk'>Github</Link>
                <Link to='' className='btn-light-wrk'>LinkedIn</Link>
                <Link to='' className='btn-light-wrk'>Resume</Link> */}
            </div>
            <Paper elevation={24} className="paper">
            <div className='work-text'>
                
                <h4>Innovative task driven professional with 1.5 +years of  experience in web development across diverse Industries. Equipped with record success in providing the technical need of the companies.
                    Proficient in clearing bugs, troubleshooting the small and
                    complex issues and implementing few feature based on client's feedback.
                </h4>
               
            </div>
            </Paper>

            <div className='experience'>
            <Paper elevation={24} className="paper" >
                <Timeline position='alternate'>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color='secondary' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <h3>Software Developer L-1</h3>
                            <h4>Unifo Solution Pvt Ltd - Chennai</h4>
                            <h4>Aug - 2021 to  Sep- 2022</h4>
                        </TimelineContent>

                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color='success' />
                        </TimelineSeparator>
                        <TimelineContent>
                            <h3>Junior Software Developer</h3>
                            <h4>Mazenet Solution Pvt Ltd - Coimbatore</h4>
                            <h4>Nov - 2020 to  May- 2021</h4>
                        </TimelineContent>

                    </TimelineItem>
                </Timeline>
               </Paper> 
            </div>
            <Paper elevation={24} className="paper">
            <div className='resume'>
                <h4 className='work-text'> Hey are you looking for designer to grow and build your business.
                 why can't we connect ?</h4>
                 <div className='download'>
                 <Link className='resume-cv'>   Download CV <DownloadIcon /> </Link>
                 </div>
            </div>
            </Paper>

        </div>
    )
}

export default WorkExperinece