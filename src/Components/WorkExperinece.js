import './navbarStyle.css'
import { Link } from 'react-router-dom'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import React from 'react'

const WorkExperinece = () => {
    return (
        <div className='work-header'>
            <div className='link-header'>
                <Link to='' className='btn-light-wrk'>Github</Link>
                <Link to='' className='btn-light-wrk'>LinkedIn</Link>
                <Link to='' className='btn-light-wrk'>Resume</Link>
            </div>
            <div className='experience'>
                <Timeline position='alternate'>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot  color='secondary' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <h3>Software Developer L-1</h3>
                            <h4>Unifo Solution Pvt Ltd - Chennai</h4>
                            <p> FrontEnd Developer</p>
                             </TimelineContent>
                        
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color='success' />
                        </TimelineSeparator>
                        <TimelineContent>
                            <h3>Junior Software Developer</h3>
                            <h4>Mazenet Solution Pvt Ltd - Coimbatore</h4>
                            <p> FrontEnd Developer</p>
                             </TimelineContent>
                       
                    </TimelineItem>
                </Timeline>
            </div>

        </div>
    )
}

export default WorkExperinece