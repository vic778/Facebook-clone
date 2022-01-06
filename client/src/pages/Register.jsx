import React from 'react';
import '../styles/RegisterStyle.css';

const Register = () => {
    return (
        <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Facebook</h3>
                <div className="span loginDesc"> Connect with friends and the world around you on Facebook</div>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                <input className="loginInput" placeholder='Username' />
                    <input className="loginInput" placeholder='Email' />
                    <input className="loginInput" placeholder='Password' />
                    <input className="loginInput" placeholder='Password Again' />
                    <button className='loginButton'>Sign Up</button>
                    <button className='loginRegisterButton'>Log into Account </button>
                </div>
            </div>
        </div>
        
    </div>
    );
};

export default Register;