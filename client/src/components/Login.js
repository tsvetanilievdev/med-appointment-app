import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import request from '../services/requester';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';

function Login() {
    const { loading } = useSelector((state) => state.alerts);
    console.log('LOADING>>>>>>>>', loading);
    const navigate = useNavigate();
    async function onSubmitLogin(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        try {
            const response = await request.post(
                '/api/user/login',
                Object.fromEntries(formData)
            );
            const jsonData = await response.json();
            if (jsonData.success) {
                toast('Redirect to home page', { duration: 2000 });
                toast.success(jsonData.message, { duration: 3000 });
                localStorage.setItem('token', jsonData.token);
                navigate('/');
            } else {
                toast.error(jsonData.message);
                throw new Error(jsonData.message);
            }
        } catch (error) {
            toast.error('LOGIN ERROR >>>>>>>>>>>>>', error.message);
        }
    }
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
