import React from 'react';

const SettingsProfile = ({showContent, onMouseEnter}) => {
    if(!showContent) {
        return (
            <>
                <h2 onMouseEnter = {onMouseEnter}>Profile</h2>
            </>
        )
    } else {
        return (
            <>
                <div id = "settings-profile">
                    <h2>Profile</h2>
                    <h2>Profile</h2>
                </div>
            </>
        )
    }
}

export default SettingsProfile;