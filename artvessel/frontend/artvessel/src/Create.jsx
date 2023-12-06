import React from "react";
import "./css/form.css"
import Button from "./Button";
import { Link } from "react-router-dom";

function Create() {
    return <>
        <div className="form-container">
            <Link to="post" className="create-button"><Button>NEW POST</Button></Link>
            <Link to="shop" className="create-button"><Button>NEW SHOP</Button></Link>
        </div>
    </>
}

export default Create