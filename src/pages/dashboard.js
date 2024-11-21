import React from "react";
import { Link } from 'react-router-dom';

function dashboard(){
    return (
        <div className="App">
        {/* Header Section */}
        <header className="header">
            <div className="logo">
            {/* Replace href with Link */}
            <Link to="/dasboard">
            <img src="assests/images/logo1.png" alt="Logo" />
            </Link>
            </div>

            <nav className="navbar">
            <Link to="/dashboard">home</Link>
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

        {/* Dashboard Section */}
        <section className="dashboard">
            <h1 className="title">dashboard</h1>

            <div className="box-container">
            <div className="box">
                <h3>Rs.35,000/-</h3>
                <p>total pendings</p>
            </div>

            <div className="box">
                <h3>Rs.17,000/-</h3>
                <p>completed payments</p>
            </div>

            <div className="box">
                <h3>12</h3>
                <p>orders placed</p>
            </div>

            <div className="box">
                <h3>10</h3>
                <p>products added</p>
            </div>

            <div className="box">
                <h3>55</h3>
                <p>normal users</p>
            </div>

            <div className="box">
                <h3>3</h3>
                <p>admin users</p>
            </div>

            <div className="box">
                <h3>58</h3>
                <p>total accounts</p>
            </div>

            <div className="box">
                <h3>none</h3>
                <p>new messages</p>
                
            </div>
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
                <Link to="/event">Bookings</Link>
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

export default dashboard;