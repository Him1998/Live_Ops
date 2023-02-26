import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./register.css";



function Login() {

    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");

    const handleClick =() => {
        fetch("http://localhost:8080/users/login" , {
            method : 'POST',
            body : {
                "username" : username,
                "password" : password
            }
        })
    }

    return(
        <div>
            <input placeholder=' Username ' value={username} onChange={(e)=> {setusername(e.target.value)}}/>
            <br/>
            <input placeholder='Password' value={password} onChange={(e)=> {setpassword(e.target.value)}}/>
            <br/>
            <Link to="/offers"><p onClick={handleClick}>Login</p></Link>
        </div>
    )
}

export default Login;