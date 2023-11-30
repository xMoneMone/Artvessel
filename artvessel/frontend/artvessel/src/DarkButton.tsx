import React from "react";
import './css/darkbutton.css'

function DarkButton ({children, href="", onClick = () => {}}) {
    if (href) {
        return <a href={href}><button className="dark-button">{children}</button></a>
    }
    
    return <button className="dark-button" onClick={onClick}>{children}</button>
    
}

export default DarkButton