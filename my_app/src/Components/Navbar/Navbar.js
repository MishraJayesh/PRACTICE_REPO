import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">My_App</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
