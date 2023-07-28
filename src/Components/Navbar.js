import React, { useState, useEffect, useCallback } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';



function Navbar() {
    const bars = <FontAwesomeIcon icon={faBars} />
    const x = <FontAwesomeIcon icon={faTimes} />

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        let navGutter = document.getElementById('nav-gutter');
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY && click === false && window.scrollY > (navGutter.offsetTop + navGutter.offsetHeight)) { 
                /*  if:  1. the user scrolls down
                        2. the dropdown isn't active
                        3. the user has scrolled past where the navbar lives at the top of the screen
                    then: hide the navbar.  */ 
                setShow(false);
            } else { // if scroll up show the navbar
                setShow(true);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    // event listener to get scroll position
    useEffect(() => {
        // console.log(lastScrollY);
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);


    return (
        <div>
            {/* the navbar itself*/}
            <div className={`nav-wrap ${show ? 'shown' : 'hidden'}`}>
                <nav className="navbar">
                    <div className="logo-container">
                        <Link to="/" >
                            <img src="/Images/initiare-logo-final-centered.png" className="logo" />
                        </Link>
                    </div>
                    <div className="menu-container">
                        <div className="menu-icons" onClick={handleClick}>
                            {click ? x : bars}
                        </div>
                    </div>


                </nav>
                <ul className={`nav-menu ${click ? 'active' : 'inactive'}`}>
                    <DropdownItem title="Home" link="/" closeMenu={handleClick} />
                    <DropdownItem title="About" link="/about" closeMenu={handleClick} />
                    <DropdownItem title="Articles" link="/articles" closeMenu={handleClick} />
                    <DropdownItem title="Upload" link="/upload" closeMenu={handleClick} />
                    <DropdownItem title="Blog" link="/blog" closeMenu={handleClick} />
                    <DropdownItem title="IRScholar Journal" link="/journal" closeMenu={handleClick} />
                </ul>

            </div>
            {/* the space (i.e. gutter) for the navbar when you scroll to the top of the page*/}
            <div className='nav-gutter' id="nav-gutter"></div> 
        </div>
    );
};

function DropdownItem(props) {
    return (
        <>
            <li className="nav-pages" onClick={props.closeMenu}>
                <Link to={props.link} className="nav-links">
                    {props.title}
                </Link>
            </li>

        </>
    );
}



export default Navbar;