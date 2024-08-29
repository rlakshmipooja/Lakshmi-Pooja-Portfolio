import React from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

import data from '../../assets/jsons/text.json'

import './Home.css';
import Resume from '../Resume/Resume';

function Home() {
    const skills = data.skills;

    return (
        <div className='homeContainer'>
            <div className='designation'>{data.designation}</div>
            <div className='innerContainer'>
                <div className='leftContainer'>
                    <div className='name'>{data.name}</div>
                    <div className='designation'>{data.designation}</div>
                    <div>
                        <div className='detailsContainer'>
                            <EmailOutlinedIcon className='detailsIcon'/>
                            <div className='details'>{data.email}</div>
                        </div>
                        <div className='detailsContainer'>
                            <LocationOnOutlinedIcon className='detailsIcon'/>
                            <div className='details'>{data.city}</div>
                        </div>
                        <div className='detailsContainer'>
                            <WorkOutlineOutlinedIcon className='detailsIcon'/>
                            <div className='details'>{data.workType}</div>
                        </div>
                    </div>
                    <div className='skills'>
                        {skills.map((skill, index) => {
                            return <div className='skillCard' key={index}>{skill}</div>
                        })}
                    </div>
                    <Resume />
                </div>
                <div>Center</div>
                <div>Right</div>
            </div>
        </div>
    )
}

export default Home
