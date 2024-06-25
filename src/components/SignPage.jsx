import React, { useState } from "react";
import axios from "axios";
import './signPage.css';

const SignPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        // Validate name
        if (!name.trim()) {
            errors.name = "Name is required";
            isValid = false;
        }

        // Validate email
        if (!email.trim()) {
            errors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is invalid";
            isValid = false;
        }

        // Validate password
        if (!password.trim()) {
            errors.password = "Password is required";
            isValid = false;
        } else if (password.length < 6) {
            errors.password = "Password must be at least 6 characters";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form
        if (validateForm()) {
            // If form is valid, submit data
            axios.post('http://localhost:5000/signup', {
                name,
                email,
                password
            })
            .then(response => {
                console.log(response.data);
                // Reset form inputs
                setName("");
                setEmail("");
                setPassword("");
                setErrors({});
            })
            .catch(error => {
                console.error('There was an error creating the user!', error);
            });
        }
    };

    return (
        <div className='sign-page'>
            <div className="main">
                <div className="container a-container" id="a-container">
                    <form className="form" id="a-form" onSubmit={handleSubmit}>
                        <h2 className="form_title title">Create Your Account</h2>
                        <div className="form-group">
                            <input
                                className="form__input"
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <span className="error">{errors.name}</span>}
                        </div>
                        <div className="form-group">
                            <input
                                className="form__input"
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div className="form-group">
                            <input
                                className="form__input"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <span className="error">{errors.password}</span>}
                        </div>
                        <button className="form__button button submit">SIGN UP</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignPage;
