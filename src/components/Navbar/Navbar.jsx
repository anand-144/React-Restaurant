import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(null);
    const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
        // Add smooth scrolling to all list items
        const smoothScroll = () => {
            document.querySelectorAll('.app__navbar-links li').forEach(li => {
                li.addEventListener('click', function(e) {
                    e.preventDefault();

                    // Get the href attribute of the anchor inside the li
                    const href = this.querySelector('a').getAttribute('href');

                    const target = document.querySelector(href);
                    if (target) {
                        // Delay the scrolling by 2 seconds
                        setTimeout(() => {
                            target.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }, 2000); // 2 seconds delay
                    }
                });
            });
        };

        smoothScroll(); // Call the smoothScroll function when the component mounts
    }, []); // Empty dependency array to ensure the effect runs only once

    const handleLinkClick = (index) => {
        setActiveLink(index);
        setToggleMenu(false); // Close the menu if a link is clicked
    };

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <a href="/">
                    <img src={images.Aroma} alt="app logo" />
                </a>
            </div>
            <ul className="app__navbar-links">
                <li className={`p__opensans ${activeLink === 0 ? 'active' : ''}`}>
                    <a href="#home" onClick={() => handleLinkClick(0)}>Home</a>
                </li>
                <li className={`p__opensans ${activeLink === 1 ? 'active' : ''}`}>
                    <a href="#about" onClick={() => handleLinkClick(1)}>About</a>
                </li>
                <li className={`p__opensans ${activeLink === 2 ? 'active' : ''}`}>
                    <a href="#menu" onClick={() => handleLinkClick(2)}>Menu</a>
                </li>
                <li className={`p__opensans ${activeLink === 3 ? 'active' : ''}`}>
                    <a href="#awards" onClick={() => handleLinkClick(3)}>Awards</a>
                </li>
                <li className={`p__opensans ${activeLink === 4 ? 'active' : ''}`}>
                    <a href="#contact" onClick={() => handleLinkClick(4)}>Contacts</a>
                </li>
            </ul>
            <div className="app__navbar-login">
                <a href="#login" className="p__opensans">
                    LogIn / Register
                </a>
                <div />
                <a href="/" className="p__opensans">
                    Book Table
                </a>
            </div>
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu
                    color='#f5f5f5'
                    fontSize={27}
                    onClick={() => setToggleMenu(!toggleMenu)}
                    cursor='pointer'
                />
                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu
                            fontSize={27}
                            className="overlay__close"
                            onClick={() => setToggleMenu(false)}
                        />
                        <ul className="app__navbar-smallscreen-links">
                            <li className="p__opensans">
                                <a href="#home" onClick={() => handleLinkClick(0)}>Home</a>
                            </li>
                            <li className="p__opensans">
                                <a href="#about" onClick={() => handleLinkClick(1)}>About</a>
                            </li>
                            <li className="p__opensans">
                                <a href="#menu" onClick={() => handleLinkClick(2)}>Menu</a>
                            </li>
                            <li className="p__opensans">
                                <a href="#awards" onClick={() => handleLinkClick(3)}>Awards</a>
                            </li>
                            <li className="p__opensans">
                                <a href="#contact" onClick={() => handleLinkClick(4)}>Contacts</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
