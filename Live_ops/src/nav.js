import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

function Nav() {
    return(
        <nav>
            <h1>Welcome to Live Ops</h1>
            <hr/>
            <header>
            <Link to="/"><span>Home</span></Link>
            <Link to="/register"><span>Register</span></Link>
            </header>
            <hr/>
            <hr/>
        </nav>
    )
}

export default Nav;