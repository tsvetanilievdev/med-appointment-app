import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import request from '../services/requester';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../redux/alertsReducer';

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    async function onSubmitRegister(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        try {
            dispatch(showLoading());
            const response = await request.post(
                '/api/user/register',
                Object.fromEntries(formData)
            );
            const jsonData = await response.json();
            dispatch(hideLoading());
            if (jsonData.success) {
                toast.success(jsonData.message, { duration: 4000 });
                toast.loading('Redirect to home page', { duration: 2000 });
                localStorage.setItem('token', jsonData.token);
                navigate('/');
            } else {
                toast.error(jsonData.message);
                throw new Error(jsonData.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            toast.error('REGISTER ERROR >>>>>>>>>>>>>', error.message);
        }
    }
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
