import React from "react";
import './css/darkbutton.css'

function DarkButton ({children, onClick = () => {}}) {
    return <button className="dark-button" onClick={onClick}>{children}</button>
}

export default DarkButton