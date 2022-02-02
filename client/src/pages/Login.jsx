import React from 'react';
import '../styles/LoginStyle.css';

const Login = () => {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Facebook</h3>
                    <div className="span loginDesc"> Connect with friends and the world around you on Facebook</div>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input className="loginInput" placeholder='Email' />
                        <input className="loginInput" placeholder='Password' />
                        <button className='loginButton'>Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className='loginRegisterButton'>Create a new Account</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Login;