import React, { useContext, useState } from "react";
import DarkButton from "./DarkButton"
import { UserContext } from "./App";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [user, change_user, token] = useContext(UserContext)
    const [wrong, setWrong] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        const toSend = {
            username: username,
            password1: password,
            password2: passwordConfirm
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(toSend)
        }
        fetch('http://127.0.0.1:8000/users-api/signup', requestOptions)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                if (data.status != 'ok'){
                    setWrong(data.status[0])
                }
                else {
                    change_user(data.user)
                    document.cookie = "current_user=" + data.user
                    navigate('/')
                }
            })
    }

    return <>
        <div className="form-container">
            <div className="form-background">
                <h1>SIGN UP</h1>
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
                    <div className="input-field">
                        <label>Confirm password:</label>
                        <input
                            type="password"
                            required
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                    </div>
                    <div className="wrong"><div className="wrong-div">{wrong}</div></div>
                    <div className="button-div">
                        <DarkButton>SIGN UP</DarkButton>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default Login