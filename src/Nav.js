import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login.js';
import Registration from './Registration.js';

const Nav = () => {
    const [loginTrigger, setLoginTrigger] = useState(false);
    const [registrationTrigger, setRegistrationTrigger] = useState(false);

    const handleLogin = () => {
        if(registrationTrigger) setRegistrationTrigger(false);
        setLoginTrigger(!loginTrigger);
    }
    const handleRegistration = () => {
        if(loginTrigger) setLoginTrigger(false);
        setRegistrationTrigger(!registrationTrigger);
    }

    return(
        <>
            <nav id = "nav">
                <Link to = '/' >
                    Main
                </Link>
                <Link to = '/search'>
                    Search
                </Link>
                <Link to = '/profile'>
                    Profile
                </Link>
                <div>
                    <Link onClick = {handleLogin}>
                        Login
                    </Link>
                    <span>/</span>
                    <Link onClick = {handleRegistration}>
                        Registration
                    </Link>
                </div>
                
            </nav>
            {loginTrigger && 
            <Login
                handleLogin = {handleLogin}
                handleRegistration = {handleRegistration}
            />}
            {registrationTrigger &&
            <Registration 
                handleLogin = {handleLogin} 
                handleRegistration = {handleRegistration} 
            />}
        </>
    )
} 

export default Nav;