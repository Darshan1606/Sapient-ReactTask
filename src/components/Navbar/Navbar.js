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
            </button>
            < nav >
                <img className="logo" alt="logo" src={image} />
               

                <div className={isNavExpanded ? " " : "nav-menu" } >
                    <ul data-visible="false" class="primary-navigation flex">
                        <li className="active"><a href="#" aria-hidden="true">Home</a></li>
                        <li><a href="#">New</a></li>
                        <li><a href="#">Popular</a></li>
                        <li><a href="#">Trending</a></li>
                        <li><a href="#">Catagories</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar