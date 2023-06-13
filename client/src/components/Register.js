import React from 'react';
import { Link } from 'react-router-dom';
function Register() {
    return (
        <div className="authentication">
            <div className="authentication-form card">
                <h1 className="card-title">Nice to meet you</h1>
                <form className="vertical2" onSubmit={onSubmitRegister}>
                    <div className="form-item">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your name"
                        />
                    </div>

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
                        <label htmlFor="repass">Repeat Password:</label>
                        <input
                            type="password"
                            name="repass"
                            id="repass"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="form-item">
                        <button className="primary-button">Submit</button>
                    </div>

                    <div className="form-item">
                        <span>Already registered?</span>
                        <Link to="/login" className="anchor">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;

async function onSubmitRegister(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
        const response = await fetch(
            'http://localhost:5001/api/user/register',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Object.fromEntries(formData)),
            }
        );
        const jsonData = await response.json();
        if (!jsonData.success) {
            throw new Error(jsonData.message);
        }
    } catch (error) {
        console.log('REGISTER ERROR >>>>>>>>>>>>>', error.message);
    }
}
