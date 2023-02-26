import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";


function Register() {
    const [name,setname] = useState("");
    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");    

    const handleClick =() => {
        fetch('http://localhost:8080/users/register',{
            method : 'POST',
            body : {
                "name" : name,
                "username" : username,
                "password" : password
            }
        });
    }

    return(<div id="login">
        <form>
            <input placeholder="Name" value={name} onChange={(e)=> {setname(e.target.value)}}></input>
            <br/>
            <input placeholder="Username" value={username} onChange={(e)=> {setusername(e.target.value)}}></input>
            <br/>
            <input placeholder="Password" value={password} onChange={(e)=> {setpassword(e.target.value)}}></input>
            <br/>
            <Link to="/login"><p onClick={handleClick}><b>Register</b></p></Link>
        </form>
        <h2><i>If already Registered then </i><Link to="/login">Login</Link></h2>
    </div>)
}

export default Register;