import React, { useState } from 'react';
import './loginPage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
    // State variables to manage form input and error messages
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Function to handle login form submission
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', {
                email: loginEmail,
                password: loginPassword
            });
            console.log(response.data); // Assuming response.data contains user info
            // Redirect or handle successful login
        } catch (error) {
            console.error('Login failed:', error.message);
            setErrorMessage('Invalid email or password.');
        }
    };

    // Function to handle signup form submission
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/signup', {
                email: signupEmail,
                password: signupPassword
            });
            console.log(response.data); // Assuming response.data contains success message
            // Redirect or handle successful signup
        } catch (error) {
            console.error('Signup failed:', error.message);
            setErrorMessage('Failed to sign up.');
        }
    };

    return (
        <div className='login-page'>
            <div className="main">
                <div className="container a-container" id="a-container">
                    <form className="form" id="a-form" onSubmit={handleLogin}>
                        <h2 className="form_title title">Log In to Your Account</h2>
                        <span className="form__span">or use email for login</span>
                        <input
                            className="form__input"
                            type="text"
                            placeholder="Email"
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                        />
                        <input
                            className="form__input"
                            type="password"
                            placeholder="Password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
                        {errorMessage && <span className="error-message">{errorMessage}</span>}
                        <button className="form__button button submit"> SIGN IN</button>
                    </form>
                </div>
                <div className="container b-container" id="b-container">
                    <form className="form" id="b-form" onSubmit={handleSignup}>
                        <h2 className="form_title title">Sign Up</h2>
                        <span className="form__span">or use your email account</span>
                        <input
                            className="form__input"
                            type="text"
                            placeholder="Email"
                            value={signupEmail}
                            onChange={(e) => setSignupEmail(e.target.value)}
                        />
                        <input
                            className="form__input"
                            type="password"
                            placeholder="Password"
                            value={signupPassword}
                            onChange={(e) => setSignupPassword(e.target.value)}
                        />
                        {errorMessage && <span className="error-message">{errorMessage}</span>}
                        <Link to="/signup" className="form__link">Forgot your password?</Link>
                        <button className="form__button button submit">SIGN UP</button>
                    </form>
                </div>
                <div className="switch" id="switch-cnt">
                    <div className="switch__circle"></div>
                    <div className="switch__circle switch__circle--t"></div>
                    <div className="switch__container" id="switch-c1">
                        <h2 className="switch__title title">SIGN UP NOW</h2>
                        <p className="switch__description description">To keep connected with us please sign up with your personal info</p>
                        <Link to="/signup" className="switch__button button switch-btn" style={{ textAlign: "center", lineHeight: "50px" }}>SIGN UP</Link>
                    </div>
                    <div className="switch__container is-hidden" id="switch-c2">
                        <h2 className="switch__title title">Hello Friend!</h2>
                        <p className="switch__description description">Enter your personal details and start journey with us</p>
                        <Link to="/signup" className="switch__button button switch-btn">SIGN UP</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
