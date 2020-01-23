import React from 'react';
import { Link } from 'react-router-dom';
import useRequest from './useRequest';

const Registration = ({handleLogin, handleRegistration}) => {
    const {handlePost, dataPost} = useRequest()
    console.log(dataPost)

    return (
        <div id = "registration" >
            <div className = "container" >
                <button className = "button-close" onClick = {handleRegistration} >X</button>
                <h3 style = {{marginBottom: "8vh"}} >
                    Fill the form to registration
                </h3>
                <form className = "form" action = "/users" onSubmit = {handlePost}>
                    <div>
                        <label>
                            Username:
                            <input className = "inputs" type = "text" name = "name" required />
                        </label>
                        <label>
                            Age:
                            <input className = "inputs" type = "number" name = "age" required />
                        </label>
                        <label>
                            Password:
                            <input className = "inputs" type = "password" name = "password" minLength = "8" required />
                        </label>
                    </div>
                    <input id = "input-submit" className = "inputs" type = "submit" value = "Registration" />
                </form>
                <h3 className = "registration-text">
                    Already have account? Log In <Link className = "registration-link" onClick = {handleLogin}>here</Link>
                </h3>
            </div>
        </div>

    )
}



export default Registration;