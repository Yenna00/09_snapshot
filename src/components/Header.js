import React from 'react';
import Form from './Form';
import Navigation from './Navigation';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const nav=useNavigate();
    return (
        <div>
            <h1>SnapShot</h1>
            <Form nav={nav}/>
            <Navigation/>
        </div>
    );
}

export default Header;