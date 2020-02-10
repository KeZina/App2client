import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Login from './Login';
import { UserContext } from '../../context';

const Nav = () => {
    const [loginTrigger, setLoginTrigger] = useState(false);
    const [linkSelector, setLinkSelector] = useState(null);
    const [contacts, setContacts] = useState({
        visible: false,
        data: (
            <div className = "contacts-data">
                <Link className = "contacts-link">
                    Messages
                </Link>
                <Link className = "contacts-link">
                    Pages
                </Link>
                <Link className = "contacts-link">
                    People
                </Link>
                <Link className = "contacts-link">
                    Settings
                </Link>
            </div>
        )
    })    

    const showContacts = () => setContacts({...contacts, visible: true});
    const hideContacts = () => setContacts({...contacts, visible: false});
    console.log(contacts)

    const handleTrigger = () => setLoginTrigger(!loginTrigger);

    const user = useContext(UserContext);

    const history = useHistory();
    let path = history.location.pathname;

    if(!user.data.auth) {
        if(path === "/Profile") {
            history.push("/");
        }
    }

    useEffect(() => {
        if(user.data && user.data.auth) {
            setLinkSelector(
                <>
                    <Link to = '/Profile'>
                        Profile
                    </Link>
                    <div className = "contacts" onMouseEnter = {showContacts} onMouseLeave = {hideContacts}>
                       <Link >
                            My...
                        </Link>
                        {contacts.visible && contacts.data}
                    </div>
                    
                    <Link onClick = {user.logout}>
                        Logout
                    </Link>
                </>
            )
        } else {
            setLinkSelector(
                <Link onClick = {handleTrigger}>
                    Login
                </Link>
            )
        }
    }, [user, contacts])

    return(
        <>
            <nav id = "nav">
                <Link to = '/' >
                    Main
                </Link>
                <Link to = '/Search'>
                    Search
                </Link>
                {linkSelector}
            </nav>
            {loginTrigger && 
                <Login handleTrigger = {handleTrigger} />
            }
        </>
    )
} 

export default Nav;