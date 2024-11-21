import React from "react";
import { Link } from 'react-router-dom';


function register(){
    return (
        <div>
        <section className="form-container">
          <form method="post">
            <h3>Register Now</h3>
            <section className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </section>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
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
              type="password"
              name="cpassword"
              placeholder="Re-enter your password"
              required
            />
            <input
              type="submit"
              name="submit-btn"
              className="btn"
              value="Register Now"
            />
            <p>
              Already have an account? <Link to="/">Login Now</Link>
            </p>
          </form>
        </section>
      </div>  
    )
}

export default register;