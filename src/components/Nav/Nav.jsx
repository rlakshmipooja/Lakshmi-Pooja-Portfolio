import React from 'react'
import { NavLink } from 'react-router-dom';

import './Nav.css'

function Nav() {
    return (
        <nav>
            <div className='navContainer'>
                <NavLink  className={({ isActive }) => isActive ? "tab active" : "tab"} to="/"  >Home</NavLink>
                <NavLink  className={({ isActive }) => isActive ? "tab active" : "tab"} to="/education" >Education</NavLink>
                <NavLink  className={({ isActive }) => isActive ? "tab active" : "tab"} to="/experience" >Experience</NavLink>
                <NavLink  className={({ isActive }) => isActive ? "tab active" : "tab"} to="/about" >About</NavLink>
            </div>
        </nav>
    )
}

export default Nav
