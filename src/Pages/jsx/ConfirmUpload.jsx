import React, { useState, useEffect } from "react";
import cfucss from './../css/confirmupload.module.css';

function ConfirmUpload() {
    const [stage, setStage] = useState(1)

    const handleContinue = () => {
        let k = stage
        setStage(k + 1)
        console.log(k + 1)
    }

    const handleBack = () => {
        let k = stage
        setStage(k - 1)
    }

    const ordinals = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh']

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(true)
    }

    useEffect(() => {
        if (clicked) {
            setTimeout(() => {
                setClicked(false)
            }, 700)
        }
    }, [clicked, setClicked])

    return (
        <div className={cfucss['confirm-upload-page-wrap']}>
            <div className={`${cfucss['plane-of-existence']} ${cfucss[`on-${ordinals[stage - 1]}-stage`]}`}>
                <div className={`${cfucss['first-stage']} `}>
                    <div className={`${cfucss['continue-button']} ${clicked ? cfucss['being-clicked'] : cfucss['not-being-clicked']}`} onClick={() => { handleContinue(); handleClick() }}></div>
                </div>
                <div className={`${cfucss['second-stage']} `}>
                    <div className={`${cfucss['continue-button']} ${clicked ? cfucss['being-clicked'] : cfucss['not-being-clicked']}`} onClick={() => { handleContinue(); handleClick() }}></div>
                    <div className={`${cfucss['back-button']} ${clicked ? cfucss['being-clicked'] : cfucss['not-being-clicked']}`} onClick={() => { handleBack(); handleClick() }}></div>
                </div>
                <div className={`${cfucss['third-stage']} `}>
                    <div className={`${cfucss['continue-button']} ${clicked ? cfucss['being-clicked'] : cfucss['not-being-clicked']}`} onClick={() => { handleContinue(); handleClick() }}></div>
                    <div className={`${cfucss['back-button']} ${clicked ? cfucss['being-clicked'] : cfucss['not-being-clicked']}`} onClick={() => { handleBack(); handleClick() }}></div>
                </div>
                <div className={`${cfucss['fourth-stage']} `}>
                    <div className={`${cfucss['continue-button']} ${clicked ? cfucss['being-clicked'] : cfucss['not-being-clicked']}`} onClick={() => { handleContinue(); handleClick() }}></div>
                    <div className={`${cfucss['back-button']} ${clicked ? cfucss['being-clicked'] : cfucss['not-being-clicked']}`} onClick={() => { handleBack(); handleClick() }}></div>
                </div>
                <div className={`${cfucss['fifth-stage']} `}>
                    <div className={`${cfucss['continue-button']} ${clicked ? cfucss['being-clicked'] : cfucss['not-being-clicked']}`} onClick={() => { handleContinue(); handleClick() }}></div>
                    <div className={`${cfucss['back-button']} ${clicked ? cfucss['being-clicked'] : cfucss['not-being-clicked']}`} onClick={() => { handleBack(); handleClick() }}></div>
                </div>
                <div className={`${cfucss['sixth-stage']} `}>
                    <div className={`${cfucss['continue-button']} ${clicked ? cfucss['being-clicked'] : cfucss['not-being-clicked']}`} onClick={() => { handleContinue(); handleClick() }}></div>
                    <div className={`${cfucss['back-button']} ${clicked ? cfucss['being-clicked'] : cfucss['not-being-clicked']}`} onClick={() => { handleBack(); handleClick() }}></div>
                </div>
                <div className={`${cfucss['seventh-stage']} `}>
                    <div className={`${cfucss['back-button']} ${clicked ? cfucss['being-clicked'] : cfucss['not-being-clicked']}`} onClick={() => { handleBack(); handleClick() }}></div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmUpload

// sample of continue button
// <div className={`${cfucss['continue-button']} ${clicked ? cfucss['being-clicked'] : cfucss['not-being-clicked']}`}  onClick={() => { handleContinue(); handleClick() }}></div>

// sample of back button
// <div className={`${cfucss['back-button']} ${clicked ? cfucss['being-clicked'] : cfucss['not-being-clicked']}`} onClick={() => { handleBack(); handleClick() }}></div>