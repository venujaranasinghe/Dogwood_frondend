import React from "react";
import { Link } from 'react-router-dom';


function login(){
    return (
        <div className="login">
        <section className="form-container">
            <form method="post">
            <h3>Login Now</h3>
            <section className="social-icons">
                <a href="#" className="icon"><i className="fa-brands fa-google"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-facebook"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </section>
            <input 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                required 
            />
            <input 
                type="password" 
                name="password" 
                placeholder="Enter your password" 
                required 
            />
            <input 
                type="submit" 
                name="submit-btn" 
                className="btn" 
                value="Register Now" 
            />
            <p>
            Do not have an account? <Link to="/register">Register Now</Link>
            </p>
            </form>
        </section>
        </div>
    )
}

export default login;