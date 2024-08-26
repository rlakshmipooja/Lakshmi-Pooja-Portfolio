import React from 'react';

import data from '../../assets/jsons/text.json'

import './Header.css';


function Header() {
    return (
        <div className='container'>
            <div className='top'>
                <div className='headerLeft'>
                    <div className='headerIcon'> &lt; &#47; &gt;</div>
                    <div className='headerName'>{data.name} </div>
                </div>
            </div>

            <div className='hr'></div>
        </div>
    );
}

export default Header
