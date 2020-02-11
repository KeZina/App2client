import React, { useState } from 'react';
import Container from '../../Container';
import SettingsProfile from './SettingsProfile';

const Settings = () => {
    const [visible, setVisible] = useState(null);
    
    const checkVisible = name => visible === name;
    console.log(visible)

    return (
        <Container level = {3}>
            <h1 id = "settingsTitle">
                Settings
            </h1>
            <SettingsProfile 
                showContent = {checkVisible("settingsProfile")} 
                onMouseEnter = {() => setVisible("settingsProfile")} 
            />
        </Container>
    )
}

export default Settings;