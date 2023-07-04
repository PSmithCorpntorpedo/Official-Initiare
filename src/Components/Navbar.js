import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'


function Navbar(){
    const bars = <FontAwesomeIcon icon = {faBars}/>
    const x = <FontAwesomeIcon icon = {faTimes}/>

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="logo">
                    init-logo
                    </Link>
                </div>
                <div className="menu-icons" onClick={handleClick }>
                    {click ? x : bars}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-pages" onClick={closeMenu}>
                        <Link to="/" className="nav-links" >
                            Home
                        </Link>
                    </li>
                    <li className="nav-pages" onClick={closeMenu}>
                        <Link to="/about" className="nav-links" >
                            About
                        </Link>
                    </li>
                    <li className="nav-pages" onClick={closeMenu}>
                        <Link to="/" className="nav-links" >
                            Archive
                        </Link>
                    </li>
                    <li className="nav-pages" onClick={closeMenu}>
                        <Link to="/upload" className="nav-links" >
                            Upload
                        </Link>
                    </li>
                    <li className="nav-pages" onClick={closeMenu}>
                        <Link to="/blog" className="nav-links" >
                            Blog
                        </Link>
                    </li>
                    <li className="nav-pages" onClick={closeMenu}>
                        <Link to="/ixsjournal" className="nav-links" >
                            InitiaRe x Scholar Journal
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;