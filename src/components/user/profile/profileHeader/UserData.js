import React, { useContext } from 'react';
import { UserContext } from '../../../../context';

const UserData = () => {
    const user = useContext(UserContext);

    return (
        <div id = "user-information">
            <h3 className = "name">
                {user.data.name}
            </h3>
            <p>
                age: {user.data.age || "?"}
            </p>
        </div>
    )
}

export default UserData