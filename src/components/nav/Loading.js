import React, { useContext } from 'react';
import { UserContext } from '../../context';

const Loading = () => {
    const user = useContext(UserContext);

    if(user.loading){
        return (
            <div id = "loading">
                <h1>
                    loading...
                </h1>
            </div>
        )
    } else {
        return null;
    }
}

export default Loading;