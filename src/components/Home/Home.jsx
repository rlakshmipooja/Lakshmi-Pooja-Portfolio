import React from 'react';

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
                    <div>{data.name}</div>
                    <div>{data.designation}</div>
                    <div>{data.email}</div>
                    <div>{data.city}</div>
                    <div className='skills'>
                        {skills.map((skill, index) => {
                            return <div key={index}>{skill}</div>
                        })}
                    </div>
                    <Resume/>
                </div>
                <div>Center</div>
                <div>Right</div>
            </div>
        </div>
    )
}

export default Home
