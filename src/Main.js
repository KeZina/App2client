import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Main = () => {
    const user = useContext(UserContext)
    console.log(user)

    return(
        <div  className = "general-container" >

        </div>
    )
}

export default Main;