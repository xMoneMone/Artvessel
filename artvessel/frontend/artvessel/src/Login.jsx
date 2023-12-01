import React, { useState } from "react";
import DarkButton from "./DarkButton"
import "./css/form.css"

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return <>
        <div className="form-container">
            <div className="form-background">
                <h1>LOG IN</h1>
                <form>
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
                    <div className="button-div">
                        <DarkButton>LOG IN</DarkButton>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default Login