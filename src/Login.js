import React from 'react';

const Login = ({handleTrigger}) => {
    return(
        <div id = "login" >
            <div className = "container" >
                <button className = "button-close" onClick = {handleTrigger} >X</button>
                <h3 style = {{marginBottom: "8vh"}} >
                    Fill the form to Log In
                </h3>
                <form className = "form" >
                    <div>
                        <div>
                            <label htmlFor = "input-login" >Email:</label>
                            <input id = "input-login" className = "inputs" type = "text" />
                        </div>
                        <div>
                            <label htmlFor = "input-password" >Password:</label>
                            <input id = "input-password" className = "inputs" type = "password" />
                        </div>
                    </div>
                  
                    <input id = "input-submit" className = "inputs" type = "submit" value = "Log In" />
                </form>
            </div>
        </div>
    )
}

export default Login;