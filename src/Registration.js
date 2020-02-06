import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useRequest from './hooks/useRequest';

const Registration = ({handleLogin, handleRegistration}) => {
    const [age, setAge] = useState("");
    const {handlePost, POST} = useRequest();

    const handleAge = (e) => {
        const v = e.target.value;
        if(/\d/.test(v) || v === "") setAge(v);
    }

    console.log(POST);

    return (
        <div id = "registration" >
            <div className = "container" >
                <button className = "button-close" onClick = {handleRegistration}>X</button>
                <h3 style = {{marginBottom: "8vh"}} >
                    Fill the form to registration
                </h3>
                <form className = "form" action = "/users/create" onSubmit = {handlePost}>
                    <div>
                        <label>
                            Username:
                            <input 
                                className = "inputs" 
                                type = "text" 
                                name = "name"
                                minLength = "3"
                                required 
                            />
                        </label>
                        <label>
                            Age:
                            <input
                                className = "inputs" 
                                type = "text" 
                                name = "age" 
                                value = {age}
                                maxLength = "2"
                                onChange = {handleAge}
                                required 
                            />
                        </label>
                        <label>
                            Password:
                            <input 
                                className = "inputs" 
                                type = "password" 
                                name = "password" 
                                minLength = "8" 
                                required 
                            />
                        </label>
                    </div>
                    <input id = "input-submit" className = "inputs" type = "submit" value = "Registration" />
                </form>
                <h3 className = "registration-text">
                    Already have an account? Log In <Link className = "registration-link" onClick = {handleLogin}>here</Link>
                </h3>
            </div>
        </div>

    )
}



export default Registration;