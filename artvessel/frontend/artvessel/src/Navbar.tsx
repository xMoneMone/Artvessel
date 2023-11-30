import React from "react"
import { Link } from "react-router-dom";
import logo from "./images/logo.png"
import logo_text from "./images/logo-text.png"
import default_pfp from "./images/default-pfp.png"
import Button from "./Button"
import './css/navbar.css'

function Navbar() {
    return  (
    <div className="navbar">
        <div className="logo">
            <Link to="">
                <img className="logo-image" src={logo} alt="logo"></img>
                <img className="logo-text" src={logo_text} alt="logo-text"></img>
            </Link>
        </div>
        <div className="right">
            <div className="guest">
                <Link to="/login"><Button>LOG IN</Button></Link>
                <Link to="/signup"><Button>SIGN UP</Button></Link>
            </div>
            <div className="logged-in">
                <a href="#" title="Saved"><svg className="saved" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/></svg></a>
                <Link to="/profile"><div className="navbar-pfp"><img src={default_pfp} alt="profile picture"></img></div></Link>
            </div>
        </div>
    </div>)
}

export default Navbar