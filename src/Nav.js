import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login.js';

const Nav = () => {
    const [loginTrigger, setLoginTrigger] = useState(false);
    const handleTrigger = () => setLoginTrigger(!loginTrigger);

    return(
        <>
            <nav id = "nav">
                <Link to = '/' >
                    Main
                </Link>
                <Link to = '/Search'>
                    Search
                </Link>
                <Link to = '/Profile'>
                    Profile
                </Link>
                <Link onClick = {handleTrigger}>
                    Login
                </Link>
            </nav>
            {loginTrigger && <Login handleTrigger = {handleTrigger} />}
        </>
    )
} 

export default Nav;