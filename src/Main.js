import React, { useState } from 'react';
import { useGet, usePost } from './requests';

const Main = () => {
    const [paramsGet, setParamsGet] = useState({
        url: "",
        reload: 0,
        options: {}
    });

    const [paramsPost, setParamsPost] = useState({
        url: "",
        reload: 0,
        options: {body: {}}
    });
    const [inputValue, setInputValue] = useState({});



    const handleGet = (e) => {
        e.preventDefault();
        setParamsGet({
            ...paramsGet,
            url: e.target.action,
            reload: Math.random()
        })
    }

    const handlePost = (e) => {
        e.preventDefault();
        setParamsPost({
            ...paramsPost,
            url: e.target.action,
            reload: Math.random(),
            options: {
                body: JSON.stringify(inputValue)
            }
        })
    }

    const handleInput = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }

    let responseGet = useGet(paramsGet);
    let responsePost = usePost(paramsPost);

    return(
        <div className = "general-container" >
            <form action = "/back" method = "GET" onSubmit = {handleGet}>
                <input type = "submit" value = "GET" />
            </form>
            <form action = "/back" method = "POST" onSubmit = {handlePost}>
                <input type = "text" name = "Login" onChange = {handleInput} placeholder = "Enter login" />
                <input type = "password" name = "Password" onChange = {handleInput} placeholder = "Enter password" />
                <input type = "submit" value = "POST" />
            </form>
            <h1 style = {{color: "red", fontSize: "5em", backgroundColor: "yellow", position: "relative", margin: "auto", top: "10vh"}}>
                {responseGet}
            </h1> 
        </div>
    )
}

export default Main;