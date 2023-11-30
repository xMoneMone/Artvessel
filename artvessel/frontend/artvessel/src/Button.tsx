import React from "react";
import './css/button.css'

function Button ({children, href="", onClick = () => {}}) {
    if (href) {
        return <a href={href}><button className="button">{children}</button></a>
    }
    
    return <button className="button" onClick={onClick}>{children}</button>
    
}

export default Button