import homecss from './../css/home.module.css';
import headerVideo from './../assets/pexels-pixabay-855204-1920x1080-30fps.mp4';
import React from 'react';

const Home = () => {
    return (
        <div className={homecss['home']}>
            <div className={homecss['home-header']}>
                <video className={homecss['header-video']} src={headerVideo} muted autoPlay loop></video>
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
            </div>
        </div>
    )
}

export default Home;