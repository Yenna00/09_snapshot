import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
    return (
        <nav className="main-nav">
                <NavLink to="/mountain">Mountain</NavLink>
                <NavLink to="/beach">Beaches</NavLink>
                <NavLink to="/bird">Birds</NavLink>
                <NavLink to="/food">Food</NavLink>
        </nav>
    );
}

export default Navigation;