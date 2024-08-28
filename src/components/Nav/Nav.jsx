import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom';

import './Nav.css'

function Nav() {
    return (
        <nav>
            <div className='navContainer'>
                <Link to="/">Home</Link>
                <Link to="/education">Education</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    )
}

export default Nav
