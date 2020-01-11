import React, { useState, useEffect } from 'react';
import { useGet } from './requests';

const Main = () => {
    const [url, setUrl] = useState('');
    let response = useGet(url);
    console.log(response)

    return(
        <div className = 'general-container' >
            <button onClick = {() => setUrl('/back')}>req</button>
            <h1 style = {{color: "red", fontSize: "5em", backgroundColor: "yellow", position: "relative", margin: "auto", top: "10vh"}}>
                {response}
            </h1> 
        </div>
    )
}

export default Main;