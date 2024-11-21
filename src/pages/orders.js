import React from "react";
import { Link } from 'react-router-dom';

function orders(){
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
                username: <span>admin name</span>
            </p>
            <p>
                email: <span>admin email</span>
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

        {/* Placed Orders Section */}
        <section className="placed-orders">
            <h1 className="title">placed orders</h1>
            <div className="box-container">
            {[...Array(4)].map((_, index) => (
                <div className="box" key={index}>
                <p>
                    user id: <span>0001</span>
                </p>
                <p>
                    placed on: <span>20/09/24</span>
                </p>
                <p>
                    name: <span>Vinuki Thiranya</span>
                </p>
                <p>
                    number: <span>0773546738</span>
                </p>
                <p>
                    email: <span>vinuki@gmail.com</span>
                </p>
                <p>
                    address: <span>No 123 Dompe</span>
                </p>
                <p>
                    total products: <span>2</span>
                </p>
                <p>
                    total price: <span>Rs.4000/-</span>
                </p>
                <p>
                    payment method: <span>Cash on Delivery</span>
                </p>
                <form action="" method="post">
                    <input type="hidden" name="order_id" value="" />
                    <select name="update_payment">
                    <option disabled selected>
                        payment status
                    </option>
                    <option value="pending">pending</option>
                    <option value="completed">completed</option>
                    </select>
                    <input
                    type="submit"
                    name="update_order"
                    value="update"
                    className="option-btn"
                    />
                    <Link
                    to="#"
                    className="delete-btn"
                    onClick={() =>
                        window.confirm("delete this order?")
                        ? console.log("Order deleted")
                        : null
                    }
                    >
                    delete
                    </Link>
                </form>
                </div>
            ))}
            </div>
        </section>

        {/* Footer Section */}
        <section className="footer">
            <div className="social">
            <Link to="#" className="icon">
                <i className="fa-brands fa-google"></i>
            </Link>
            <Link to="#" className="icon">
                <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link to="#" className="icon">
                <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link to="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
            </Link>
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
    
export default orders;