import React from "react"
import { useState } from "react";

import image from "../../logo.svg"
import './navbar.css'

const Navbar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <div className="navbarclass">
            <button
                onClick={() => setIsNavExpanded(!isNavExpanded)}
                className="hamburger"
                aria-controls="primary-navigation"
                aria-expanded="true"
            >
                <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z"/><path d="M0 0h40v3H0z"/></g></svg>
            </button>
            < nav >
                <img className="logo" alt="logo" src={image} />


                <div className={isNavExpanded ? "nav-expand ": "nav-menu"} >
                    <ul data-visible="false" class="primary-navigation flex">
                        <li className="active"><a href="#" aria-hidden="true">Home</a></li>
                        <li><a href="#">New</a></li>
                        <li><a href="#">Popular</a></li>
                        <li><a href="#">Trending</a></li>
                        <li><a href="#">Catagories</a></li>
                        <button
                            onClick={() => setIsNavExpanded(!isNavExpanded)}
                            className="hamburger"
                            aria-controls="primary-navigation"
                            aria-expanded="true"
                        >
                            <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z"/><path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z"/></g></svg>
                        </button>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar