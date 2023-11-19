import homecss from './../css/home.module.css';
// import headerVideo from './../assets/pexels-pixabay-855204-1920x1080-30fps.mp4';
import React from 'react';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {

    return (
        <div className={homecss['home']}>
            <div className={homecss['home-header']}>
                <img className={homecss['header-video']} src={"Images/vlcsnap-2023-07-06-21h40m04s969 1.png"} alt='dark background'></img>
                <div className={homecss['beforemain-wrap']}>
                    <div className={homecss['beforemain']}>Welcome to</div>
                </div> 
                <div className={homecss['main-text-wrap']}>
                    <h1 className={homecss['main-text']}>InitiaRe</h1>
                </div>
                <div className={homecss['aftermain-wrap']}>
                    <div className={homecss['aftermain']}>An open journal for students</div>
                </div>
                <div className={homecss['clock-wrap-wrap']}>
                    <div className={homecss['clock-wrap']}>
                        <div className={homecss['hour-mark']}></div>
                        <div className={homecss['hour-mark']}></div>
                        <div className={homecss['hour-mark']}></div>
                        <div className={homecss['hour-mark']}></div>
                        <div className={homecss['hour-mark']}></div>
                        <div className={homecss['hour-mark']}></div>
                        <div className={homecss['long-hand']}></div>
                        <div className={homecss['short-hand']}></div>
                    </div>
                </div>
                <div className={homecss['afterclock-wrap']}>
                    <div className={homecss['afterclock']}>
                        <div className={homecss['learn-more-wrap']}>
                            <div className={homecss['learn-more']}>Learn more</div>
                        </div>
                        <div className={homecss['down-arrow-wrap']}>
                            <div className={homecss['down-arrow']} onClick={(e) => {e.preventDefault(); window.location.href='#goals-wrap';}}><FontAwesomeIcon icon={faArrowDownLong} /></div>
                        </div>
                    </div>
                </div>
                <div className={homecss['goals-wrap']} id='goals-wrap'>
                    <div className={homecss['goals']}>
                        <div className={homecss['upper-goal']}>OUR GOALS</div>
                        <div className={homecss['goal-line']}></div>
                        <div className={homecss['lower-goal']}>
                            <p className={homecss['lower-goal-text']}>The objective of our team is clear! Here at InitiaRe, we aim to establish an accessible and dynamic platform that empowers students by promoting professional research and facilitating the exchange of research papers. This open journal caters not only to those looking to publish their work but also provides inspiration for researchers seeking fresh ideas or reliable sources of information.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={homecss['join-us']}>
                <div className={homecss['join-us-content']}>
                    <div className={homecss['join-us-main-text']}>
                        Want to be a part of the <span style={{color: "var(--secondary)"}}>Initia</span><span style={{color: "var(--primary)"}}>Re</span> Team?
                    </div>
                    <div onClick={() => {window.open('https://www.facebook.com/profile.php?id=100092825321496')}} className={homecss['join-us-button']}>Learn more</div>
                </div>
            </div>
        </div>
    )
}

export default Home;