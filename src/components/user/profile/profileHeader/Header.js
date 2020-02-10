import React from 'react';
import Avatar from './Avatar.js';
import UserData from './UserData'

const Header = () => {
    return(
        <header className = "header">
            <UserData />
            <Avatar url />
        </header>
    )
}

export default Header;