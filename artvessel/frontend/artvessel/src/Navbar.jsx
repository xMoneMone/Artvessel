import React, { useContext } from "react"
import { Link } from "react-router-dom";
import logo from "./images/logo.png"
import logo_text from "./images/logo-text.png"
import default_pfp from "./images/default-pfp.png"
import Button from "./Button"
import './css/navbar.css'
import { UserContext } from "./App";

function Navbar() {
    const user = useContext(UserContext)

    return  (
    <div className="navbar">
        <div className="logo">
            <Link to="">
                <img className="logo-image" src={logo} alt="logo"></img>
                <img className="logo-text" src={logo_text} alt="logo-text"></img>
            </Link>
        </div>
        <div className="right">
            {!user && <div className="guest">
                <Link to="/login"><Button>LOG IN</Button></Link>
                <Link to="/signup"><Button>SIGN UP</Button></Link>
            </div>}
            {user && <div className="logged-in">
                <Link to="/create" title="Create post">
                    <svg className="saved" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                </Link>
                <Link to="#" title="Saved">
                    <svg className="saved" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/></svg>
                </Link>
                <Link to="/profile"><div className="navbar-pfp"><img src={default_pfp} alt="profile picture"></img></div></Link>
            </div>}
        </div>
    </div>)
}

export default Navbar