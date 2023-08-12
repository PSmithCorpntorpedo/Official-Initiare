import React, { useState, useEffect } from 'react';
import navbarcss from './navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faArrowRightToBracket, faCaretDown, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import useAuth from './../Hooks/useAuth.js';

function Navbar() {
    const {auth} = useAuth()

    const logoutIcon = <FontAwesomeIcon icon={faArrowRightFromBracket} />
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const downIcon = <FontAwesomeIcon icon={faCaretDown} />
    const loginIcon = <FontAwesomeIcon icon={faArrowRightToBracket} />
    const bars = <FontAwesomeIcon icon={faBars} />
    const x = <FontAwesomeIcon icon={faTimes} />
    const navi = useNavigate()


    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    // user-drop-down
    const [UDDA, setUDD] = useState(false);
    const handleUDD = () => setUDD(!UDDA);

    const logOut = () => {
        window.localStorage.clear()
        navi('/')
        window.location.reload()
    }

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // event listener to get scroll position
    useEffect(() => {
        // moved controlNavbar inside of useEffect to prevent warning
        const controlNavbar = () => {
            let navGutter = document.getElementById('nav-gutter');
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && click === false && window.scrollY > (navGutter.offsetTop + navGutter.offsetHeight)) { 
                    /*  if: 1. the user scrolls down
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

        // console.log(lastScrollY);
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY, click]);

    return (
        <div>
            {/* the navbar itself*/}
            <div className={`${navbarcss['nav-wrap']} ${show ? navbarcss.shown : navbarcss.hidden}`}>
                <nav className={navbarcss['navbar']}>
                    <div className={navbarcss['left-container']}>
                        <div className={navbarcss['menu-container']}>
                            <div className={navbarcss['menu-icons']} onClick={handleClick}>
                                {click ? x : bars}
                            </div>
                        </div>
                        <Link to='/' className={navbarcss['logo-container']}>
                            <img src="/Images/initiare-logo-final-centered.png" alt='logo' className={navbarcss['logo']} />
                        </Link>
                        <div className={navbarcss['site-name-container']}>
                            <div className={navbarcss['site-name']}>InitiaRe</div>
                        </div>
                    </div>
                    <div className={navbarcss['right-container']}>
                        <div className={`${navbarcss['register-button-wrap']} ${ auth.user ? navbarcss['hide'] : navbarcss['show']}`}>
                            <Link className={navbarcss['register-button-link']} to='/signup'><div className={navbarcss['register-button']}>Register</div></Link>
                        </div>
                        <div className={`${navbarcss['login-button-wrap']} ${ auth.user ? navbarcss['hide'] : navbarcss['show']}`}>
                            <Link className={navbarcss['login-button-link']} to='/login'><div className={navbarcss['login-button']}>Log in {loginIcon}</div></Link>
                        </div>
                        <div className={`${navbarcss['username-box-wrap']} ${ auth.user ? navbarcss['show'] : navbarcss['hide']}`}>
                            <div className={navbarcss['username-box']} onClick={handleUDD}>{ auth.user ? `${auth.user.first_name}` : 'none'} {downIcon}</div>
                        </div>
                    </div>             

                </nav>
                <ul className={`${navbarcss['nav-menu']} ${click ? navbarcss['active'] : navbarcss['inactive']}`}>
                    <DropdownItem title="Home" link="/" closeMenu={handleClick} />
                    <DropdownItem title="About" link="/about" closeMenu={handleClick} />
                    <DropdownItem title="Articles" link="/articles" closeMenu={handleClick} />
                    <DropdownItem title="Upload" link="/upload" closeMenu={handleClick} />
                    <DropdownItem title="Blog" link="/blog" closeMenu={handleClick} />
                    <DropdownItem title="IRScholar Journal" link="/journal" closeMenu={handleClick} />
                </ul>
                <ul className={`${navbarcss.udd} ${UDDA ? navbarcss.activeudda : navbarcss.inactiveudda}`}>
                    <li className={`${navbarcss.uddi} ${navbarcss['edit-profile']}`}><span className={navbarcss.uddic}>{userIcon}</span>Edit Profile</li>
                    <li className={`${navbarcss.uddi} ${navbarcss['logout']}`} onClick={logOut}><span className={navbarcss.uddic}>{logoutIcon}</span>Log out</li>
                </ul>

            </div>
            {/* the space (i.e. gutter) for the navbar when you scroll to the top of the page*/}
            <div className={navbarcss['nav-gutter']} id="nav-gutter"></div> 
        </div>
    );
};

function DropdownItem(props) {
    return (
        <>
            <li className={navbarcss['nav-pages']} onClick={(props.closeMenu)}>
                <Link to={props.link} className={navbarcss['nav-links']}>
                    {props.title}
                </Link>
            </li>

        </>
    );
}



export default Navbar;