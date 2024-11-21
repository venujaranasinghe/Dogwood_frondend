import React from "react";
import { Link } from 'react-router-dom';

 function userNew() {
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

        <div className='container'>
            <div className='py-4'>
            <table className="table border shadow">
            <thead>
                <tr>
                <th scope="col">User id</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">User Type</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </table>
            </div>
        </div>
        </div>
    )
}

export default userNew;