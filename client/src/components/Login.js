import React from 'react';
import { Link } from 'react-router-dom';
function Login() {
    return (
        <div className="authentication">
            <div className="authentication-form card">
                <h1 className="card-title">Welcome back</h1>
                <form className="vertical2" onSubmit={onSubmitLogin}>
                    <div className="form-item">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="form-item">
                        <button className="primary-button">Submit</button>
                    </div>

                    <div className="form-item">
                        <span>Do not have account?</span>
                        <Link to="/register" className="anchor">
                            Register here
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;

async function onSubmitLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
        const response = await fetch('http://localhost:5001/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        });
        const jsonData = await response.json();
        if (!jsonData.success) {
            throw new Error(jsonData.message);
        }
    } catch (error) {
        console.log('LOGIN ERROR >>>>>>>>>>>>>', error.message);
    }
}
