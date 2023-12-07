import React, { useState } from "react";
import DarkButton from "./DarkButton"

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
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
                            type="text"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-field">
                        <label>Confirm password:</label>
                        <input
                            type="text"
                            required
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                    </div>
                    <div className="button-div">
                        <DarkButton>SIGN UP</DarkButton>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default Login