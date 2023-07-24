import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';



function Navbar(){
    const bars = <FontAwesomeIcon icon = {faBars}/>
    const x = <FontAwesomeIcon icon = {faTimes}/>

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return(
        <>
            <nav className="navbar">
                <div className="logo-container">
                    <Link to="/" >
                    <img src="/Images/initiare-logo-final-centered.png" className="logo"/> 
                    </Link>
                </div>
                <div className="menu-container">
                    <div className="menu-icons" onClick={handleClick}>
                    {click ? x : bars}
                    </div>
                </div>
                
                
            </nav>
            <ul className={click ? "nav-menu active" : "nav-menu inactive"}>
                    <DropdownItem title="Home" link ="/" stateChanger={setClick}/>
                    <DropdownItem title="About" link ="/about" stateChanger={setClick}/>
                    <DropdownItem title="Archive" link ="/archive" stateChanger={setClick}/>
                    <DropdownItem title="Upload" link ="/upload" stateChanger={setClick}/>
                    <DropdownItem title="Blog" link ="/blog" stateChanger={setClick}/>
                    <DropdownItem title="InitiaRe x Scholar Journal" link ="/ixsjournal" stateChanger={setClick}/>
                </ul>
        </>
    );
};

function DropdownItem(props){
    return(
        <>
            <li className="nav-pages" onClick={props.stateChanger}>
                <Link to={props.link} className="nav-links">
                {props.title}
                </Link>
            </li>
            
        </>
    );
}



export default Navbar;