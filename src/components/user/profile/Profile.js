import React from 'react';
import Container from '../../Container';
import Header from './profileHeader/Header';
import AboutContainer from './profileMain/AboutContainer';
import PostsContainer from './profileMain/PostsContainer';

const Profile = () => {
    return(
        <Container level = {3}>
            <Header />
            <AboutContainer />  
            <PostsContainer />
        </Container>
    )
}

export default Profile;