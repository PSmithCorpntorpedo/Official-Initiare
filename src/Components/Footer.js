import React from 'react';
import footercss from './footer.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
    const instagramIcon = <FontAwesomeIcon icon={faInstagram} />
    
    return (
        <div className={footercss['footer']}>
            <div className={footercss['upper-footer']}>
                <div className={footercss['main-link-wrap']}>
                    {/* <Link className={footercss['main-link']} to='/articles'>Articles</Link> */}
                    <Link className={footercss['main-link']} to='/upload'>Upload your paper</Link>
                    <Link className={footercss['main-link']} to='/about#terms-of-use'>Terms & Conditions</Link>
                    {/* <Link className={footercss['main-link']} to='/journal'>IRScholar Journal</Link> */}
                    {/* <Link className={footercss['main-link']} to='/blog'>Our blog</Link> */}
                    <Link className={footercss['main-link']} to='/about'>About us</Link>
                </div>
                <div className={footercss['follow-contact']}>
                    <div className={footercss['follow-wrap']}>
                        <div className={footercss['follow-text']}>Follow us</div>
                        <div className={footercss['follow-icons']}>
                            <a href='https://www.facebook.com/people/InitiaRe/100092825321496/'>{facebookIcon}</a>
                            <a href='https://instagram.com'>{instagramIcon}</a>
                        </div>
                    </div>
                    <div className={footercss['contact-wrap']}>
                        <div className={footercss['contact-text']}>Contact us</div>
                        <div className={footercss['contact-email']}>initiare.view@gmail.com</div>
                    </div>
                </div>
                <div className={footercss['disclaimer-wrap']}>
                    <span className={footercss['disclaimer-title']}>Disclaimer: </span><span className={footercss['disclaimer-text']}>The information on this site is not intended or implied to be a substitute for professional advice. InitiaRe's resources are for informational and educational purposes only.</span>
                </div>
            </div>
            <div className={footercss['lower-footer']}>&copy; 2023 InitiaRe Team</div>
        </div>
    )
};

export default Footer;
