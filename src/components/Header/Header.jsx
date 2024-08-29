import React from 'react';

import data from '../../assets/jsons/text.json'

import Nav from '../Nav/Nav';

import './Header.css';


function Header() {
    return (
        <div className='container'>
            <div className='top'>
                <div className='headerLeft'>
                    <div className='headerIcon'> {data.tag}</div>
                    <div className='headerName'>{data.name} </div>
                </div>
                <Nav/>
            </div>

            <div className='hr'></div>
        </div>
    );
}

export default Header
