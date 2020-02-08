import React from 'react';
import Header from './profileHeader/Header.js';
import AboutContainer from './profileMain/AboutContainer.js';
import PostsContainer from './profileMain/PostsContainer';

const Profile = () => {
    return(
        <div className = "general-container">
            <div className = "general-subcontainer">
                <div id = "wrapper">
                    <Header />
                    <AboutContainer />  
                    <PostsContainer />
                </div>
            </div>
        </div>
    )
}

export default Profile;