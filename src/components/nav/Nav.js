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
                <Link to = "/user/profile" className = "contacts-link">
                    Profile
                </Link>
                <Link to = "/user/messages" className = "contacts-link">
                    Messages
                </Link>
                <Link to = "/user/pages" className = "contacts-link">
                    Pages
                </Link>
                <Link to = "/user/people" className = "contacts-link">
                    People
                </Link>
                <Link to = "/user/settings" to = '/user/settings' className = "contacts-link">
                    Settings
                </Link>
            </div>
        )
    })    

    const showContacts = () => setContacts({...contacts, visible: true});
    const hideContacts = () => setContacts({...contacts, visible: false});
    const handleTrigger = () => setLoginTrigger(!loginTrigger);

    const user = useContext(UserContext);

    const history = useHistory();
    let path = history.location.pathname;

    if(!user.data.auth) {
        if(path === "/user/profile") {
            history.push("/");
        }
    }

    // MOVE HISTORY HANDLER TO APP

    useEffect(() => {
        if(user.data && user.data.auth) {
            setLinkSelector(
                <>
                    <div 
                        className = "contacts"
                        onMouseEnter = {showContacts} 
                        onMouseLeave = {hideContacts}
                    >
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
                <Link to = '/search'>
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