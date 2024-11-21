import React from "react";
import { Link } from 'react-router-dom';

function users(){
    return (
        <div>
        {/* Header Section */}
        <header className="header">
            <Link to="/" className="logo">
            <img src="assests/images/logo1.png" alt="Logo" />
            </Link>

            <nav className="navbar">
            <Link to="/">home</Link>
            <Link to="/products">products</Link>
            <Link to="/orders">orders</Link>
            <Link to="/users">users</Link>
            <Link to="/bookings">bookings</Link>
            <Link to="/messages">messages</Link>
            </nav>

            <div className="icons">
            <div className="fas fa-search" id="search-btn"></div>
            <div className="fas fa-bars" id="menu-btn"></div>
            <div id="user-btn" className="fas fa-user"></div>
            </div>

            <div className="search-form">
            <input type="search" id="search-box" placeholder="search here..." />
            <label htmlFor="search-box" className="fas fa-search"></label>
            </div>

            <div className="account-box">
            <p>
                username : <span>admin name</span>
            </p>
            <p>
                email : <span>admin email</span>
            </p>
            <Link to="/logout" className="delete-btn">
                logout
            </Link>
            <div>
                new{" "}
                <Link to="/login" className="btn">
                login
                </Link>{" "}
                |{" "}
                <Link to="/register" className="btn">
                register
                </Link>
            </div>
            </div>
        </header>

        {/* Users Section */}
        <section className="users">
            <h1 className="title">users account</h1>

            <div className="box-container">
            {[...Array(7)].map((_, index) => (
                <div className="box" key={index}>
                <p>
                    user id : <span>001</span>
                </p>
                <p>
                    username : <span>Kaveen Sashintha</span>
                </p>
                <p>
                    email : <span>kaveen123@gmail.com</span>
                </p>
                <p>
                    user type : <span>Admin</span>
                </p>
                <a
                    href="#"
                    onClick={(e) => {
                    e.preventDefault();
                    if (window.confirm("delete this user?")) {
                        // handle delete logic here
                    }
                    }}
                    className="delete-btn"
                >
                    delete
                </a>
                </div>
            ))}
            </div>
        </section>

        {/* Footer Section */}
        <section className="footer">
            <div className="social">
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
            </div>

            <ul className="list">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                <Link to="/orders">Orders</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/bookings">Bookings</Link>
            </li>
            <li>
                <Link to="/messages">Messages</Link>
            </li>
            </ul>
            <p className="copyright">
            © 2024 Dogwood, All rights reserved. Powered by B-People Developers
            </p>
        </section>
        </div>
    )
}
    
export default users;