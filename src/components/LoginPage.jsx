import React from 'react';
import './loginPage.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    /*
        Designed by: SELECTO
        Original image: https://dribbble.com/shots/5311359-Diprella-Login
    */

    let switchCtn = document.querySelector("#switch-cnt");
    let switchC1 = document.querySelector("#switch-c1");
    let switchC2 = document.querySelector("#switch-c2");
    let switchCircle = document.querySelectorAll(".switch__circle");
    let switchBtn = document.querySelectorAll(".switch-btn");
    let aContainer = document.querySelector("#a-container");
    let bContainer = document.querySelector("#b-container");
    let allButtons = document.querySelectorAll(".submit");

    let getButtons = (e) => e.preventDefault();

    let changeForm = (e) => {
        switchCtn.classList.add("is-gx");
        setTimeout(function () {
            switchCtn.classList.remove("is-gx");
        }, 1500);

        switchCtn.classList.toggle("is-txr");
        switchCircle[0].classList.toggle("is-txr");
        switchCircle[1].classList.toggle("is-txr");

        switchC1.classList.toggle("is-hidden");
        switchC2.classList.toggle("is-hidden");
        aContainer.classList.toggle("is-txl");
        bContainer.classList.toggle("is-txl");
        bContainer.classList.toggle("is-z200");
    };

    let mainF = (e) => {
        for (var i = 0; i < allButtons.length; i++)
            allButtons[i].addEventListener("click", getButtons);
        for (var i = 0; i < switchBtn.length; i++)
            switchBtn[i].addEventListener("click", changeForm);
    };

    window.addEventListener("load", mainF);

    return (
        <div className='login-page' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="main" >
                <div className="container a-container" id="a-container">
                    <form className="form" id="a-form" method="" action="">
                        <h2 className="form_title title">Log In to Your Account</h2>
                        <span className="form__span">or use email for login</span>
                        <input className="form__input" type="text" placeholder="Name" />
                        <input className="form__input" type="text" placeholder="Email" />
                        <input className="form__input" type="password" placeholder="Password" />
                        <button className="form__button button submit"> SIGN IN</button>
                    </form>
                </div>
                <div className="container b-container" id="b-container">
                    <form className="form" id="b-form" method="" action="">
                        <h2 className="form_title title">Sign Up</h2>
                        <span className="form__span">or use your email account</span>
                        <input className="form__input" type="text" placeholder="Email" />
                        <input className="form__input" type="password" placeholder="Password" />
                        <a className="form__link">Forgot your password?</a>
                        <Link to="/signup" className="form__button button submit">SIGN UP</Link>
                    </form>
                </div>
                <div className="switch" id="switch-cnt">
                    <div className="switch__circle"></div>
                    <div className="switch__circle switch__circle--t"></div>
                    <div className="switch__container" id="switch-c1">
                        <h2 className="switch__title title">SIGN UP NOW</h2>
                        <p className="switch__description description">To keep connected with us please sign up with your personal info</p>
                        <Link to="/signup" className="switch__button button switch-btn" style = {{textAlign : "center", lineHeight : "50px"}}>SIGN UP</Link>
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
