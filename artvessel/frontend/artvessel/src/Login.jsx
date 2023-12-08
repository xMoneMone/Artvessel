import React, { useContext, useState } from "react";
import DarkButton from "./DarkButton"
import "./css/form.css"
import { UserContext } from "./App";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [wrong, setWrong] = useState('');
    const [user, change_user, token] = useContext(UserContext)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        const toSend = {
            username: username,
            password: password
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(toSend)
        }
        fetch('http://127.0.0.1:8000/users-api/login', requestOptions)
            .then(response => response.json())
            .then((data) => {
                if (data.user){
                    change_user(data.user)
                    document.cookie = "current_user=" + data.user
                    navigate('/')
                }
                else {
                    setWrong("Wrong username or password")
                }
            })
    }

    return <>
        <div className="form-container">
            <div className="form-background">
                <h1>LOG IN</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <label>Username:</label>
                        <input
                            type="text"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-field">
                        <label>Password:</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="wrong">{wrong}</div>
                    <div className="button-div">
                        <DarkButton>LOG IN</DarkButton>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default Login