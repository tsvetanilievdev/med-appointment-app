import React from 'react';
import { Link } from 'react-router-dom';
function Register() {
    return (
        <div className="authentication">

            <div className='authentication-form card'>
                    <h1 className='card-title'>Welcome back</h1>
                <form className='vertical2' onSubmit={onSubmitLogin}>

                    <div className='form-item'>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name='username' id='username' placeholder='Enter your username' />
                    </div>

                    <div className='form-item'>
                        <label htmlFor="password">Password:</label>
                        <input type="pasword" name='password' id='password' placeholder='Enter your password' />
                    </div>

                    <div className='form-item'>
                        <button className='primary-button'>Submit</button>
                    </div>

                    <div className='form-item'>
                        <span>Do not have account?</span>
                        <Link to='/register' className='anchor'>Register here</Link>
                    </div>       
                </form>
            </div>
        </div>
    );
}

export default Register;

function onSubmitLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
    console.log(Object.fromEntries(formData));
}
