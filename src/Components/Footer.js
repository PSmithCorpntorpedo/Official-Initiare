import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
    const instagramIcon = <FontAwesomeIcon icon={faInstagram} />
    
    return (
        <div className='footer'>
            <div className='upper-footer'>
                <div className='main-link-wrap'>
                    <Link className='main-link' to='/articles'>Articles</Link>
                    <Link className='main-link' to='/upload'>Upload your paper</Link>
                    <Link className='main-link' to='/about#terms-of-use'>Terms & Conditions</Link>
                    <Link className='main-link' to='/journal'>IRScholar Jounal</Link>
                    <Link className='main-link' to='/blog'>Our blog</Link>
                    <Link className='main-link' to='/about'>About us</Link>
                </div>
                <div className='follow-contact'>
                    <div className='follow-wrap'>
                        <div className='follow-text'>Follow us</div>
                        <div className='follow-icons'>
                            <a>{facebookIcon}</a>
                            <a>{instagramIcon}</a>
                        </div>
                    </div>
                    <div className='contact-wrap'>
                        <div className='contact-text'>Contact us</div>
                        <div className='contact-email'>initiare.view@gmail.com</div>
                    </div>
                </div>
                <div className='disclaimer-wrap'>
                    <span className='disclaimer-title'>Disclaimer:</span><span className='disclaimer-text'>The information on this site is not intended or implied to be a substitute for professional advice. InitiaRe's resources are for informational and educational purposes only.</span>
                </div>
            </div>
            <div className='lower-footer'>	&copy; 2023 InitiaRe Team</div>
        </div>
    )
};

export default Footer;
