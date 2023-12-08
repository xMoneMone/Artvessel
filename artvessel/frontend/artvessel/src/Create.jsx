import React, { useEffect } from "react";
import "./css/form.css"
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

function Create() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!document.cookie.replace("current_user=", "")){
           navigate("/login")
        }   
      }, [])

    return <>
        <div className="form-container">
            <Link to="post" className="create-button"><Button>NEW POST</Button></Link>
            <Link to="shop" className="create-button"><Button>NEW SHOP</Button></Link>
        </div>
    </>
}

export default Create