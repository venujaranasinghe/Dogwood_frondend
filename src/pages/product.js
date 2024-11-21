import React from "react";
import { Link } from 'react-router-dom';

function product(){
    return (
        <div>
        {/* Header Section */}
        <header className="header">
            <Link to="/" className="logo">
            <img src="assests/images/logo1.png" alt="Logo" />
            </Link>

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
                new <Link to="/login" className="btn">login</Link> |{" "}
                <Link to="/register" className="btn">register</Link>
            </div>
            </div>
        </header>

        {/* Add Products Section */}
        <section className="add-products">
            <h1 className="title">Shop Products</h1>
            <form action="" method="POST" encType="multipart/form-data">
            <h3>add new product</h3>
            <input
                type="text"
                className="box"
                required
                placeholder="enter product name"
                name="name"
            />
            <input
                type="number"
                min="0"
                className="box"
                required
                placeholder="enter product price"
                name="price"
            />
            <textarea
                name="details"
                className="box"
                required
                placeholder="enter product details"
                cols="30"
                rows="10"
            ></textarea>
            <input
                type="file"
                accept="image/jpg, image/jpeg, image/png"
                required
                className="box"
                name="image"
            />
            <input type="submit" value="add product" name="add_product" className="btn" />
            </form>
        </section>

        {/* Show Products Section */}
        <section className="show-products">
            <div className="box-container">
            {Array.from({ length: 8 }, (_, i) => (
                <div className="box" key={i}>
                <div className="price">price</div>
                <img
                className="image"
                src={`assests/images/${i % 3 + 1}.jpg`}
                alt={`Product ${i + 1}`}
                />
                <div className="name">Name</div>
                <div className="details">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores dolores id sint atque! Placeat
                    magnam expedita minus iusto commodi, quibusdam velit. Eum eaque dolorum sed similique veritatis hic
                    recusandae impedit?
                </div>
                <Link to="/product_update" className="option-btn">
                    update
                </Link>
                <button
                    className="delete-btn"
                    onClick={() => window.confirm("delete this product?")}
                >
                    delete
                </button>
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/bookings">Bookings</Link></li>
            <li><Link to="/messages">Messages</Link></li>
            </ul>
            <p className="copyright">B Developers @ 2024</p>
        </section>
        </div>
    )
}
    
export default product;