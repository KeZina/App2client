import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({handleLogin, handleRegistration}) => {
    return(
        <div id = "login" >
            <div className = "container" >
                <button className = "button-close" onClick = {handleLogin} >X</button>
                <h3 style = {{marginBottom: "8vh"}} >
                    Fill the form to Log In
                </h3>
                <form className = "form" >
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
                    <input id = "input-submit" className = "inputs" type = "submit" value = "Log In" />
                </form>
                <h3 className = "registration-text">
                    Don`t have an account yet? Registration <Link className = "registration-link" onClick = {handleRegistration}>here</Link>
                </h3>
            </div>
        </div>
    )
}

export default Login;