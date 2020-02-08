import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context';

const Login = ({handleTrigger}) => {
    const login = {
        type: "Log In",
        action: "/users/login",
        switchText: "Don`t have an account yet? Registration "
    }
    const registration = {
        type: "Registration",
        action: "/users/create",
        switchText: "Already have an account? Log In "
    }
    
    const [form, setForm] = useState(login)
    const user = useContext(UserContext)

    const handleSubmit = (e) => {
        user.login(e);
        handleTrigger();
    }

    const switchForm = () => {
        if(form.type === login.type){
            setForm(registration);
        } else if(form.type === registration.type){
            setForm(login);
        }
    }

    return(
        <div id = "login" >
            <div className = "container" >
                <button className = "button-close" onClick = {handleTrigger} >X</button>
                <h3 style = {{marginBottom: "8vh"}} >
                    Fill the form to {form.type}
                </h3>
                <form className = "form" action = {form.action} onSubmit = {handleSubmit} >
                    <div>
                        <label>
                            Username:
                            <input className = "inputs" type = "text" name = "name" required />
                        </label>
                        <label>
                            Password:
                            <input className = "inputs" type = "password" name = "password" minLength = "8" required />
                        </label>
                    </div>
                    <input id = "input-submit" className = "inputs" type = "submit" value = {form.type} />
                </form>
                <h3 className = "registration-text">
                    {form.switchText}<Link className = "registration-link" onClick = {switchForm}>here</Link>
                </h3>
            </div>
        </div>
    )
}

export default Login;