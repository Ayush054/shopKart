import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
                <img src="https://img.favpng.com/16/3/16/computer-icons-shopping-cart-online-shopping-png-favpng-vrKhvGKSiQxuYu10LeiVYHbUU.jpg" style={{width: "40px",  height: "30px"}} alt="" />
                      ShopKart</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink to="/" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                        <NavLink to="/" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
                        <NavLink to="/" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart </NavLink>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar