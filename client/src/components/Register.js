import React from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
function Register() {
    return (
        <div className="authentication">

            <div className='authentication-form card'>
                    <h1 className='card-title'>Nice to meet you</h1>
                <form className='vertical2' onSubmit={onSubmitRegister}>
                    <div className='form-item'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' id='name' placeholder='Enter your name' />
                    </div>

                    <div className='form-item'>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name='username' id='username' placeholder='Enter your username' />
                    </div>

                    <div className='form-item'>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name='password' id='password' placeholder='Enter your password' />
                    </div>
                    
                    <div className='form-item'>
                        <label htmlFor="repass">Repeat Password:</label>
                        <input type="password" name='repass' id='repass' placeholder='Enter your password' />
                    </div>


                    <div className='form-item'>
                        <button className='primary-button'>Submit</button>
                    </div>

                    <div className='form-item'>
                        <span>Already registered?</span>
                        <Link to='/login' className='anchor'>Login</Link>
                    </div>       
                </form>
            </div>
        </div>
    );
}

export default Register;

function onSubmitRegister(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
    console.log(Object.fromEntries(formData));
}
