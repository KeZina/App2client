import React from 'react';
import Avatar from './Avatar.js';
import UserInformation from './UserInformation.js'

const Header = () => {
    return(
        <header className = "header">
            <UserInformation />
            <Avatar url />
        </header>
    )
}

export default Header;