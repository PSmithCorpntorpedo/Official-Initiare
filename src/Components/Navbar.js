import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Navbar(){
    const element = <FontAwesomeIcon icon={faCoffee} />
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link>
                    HEllo {element}

                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;