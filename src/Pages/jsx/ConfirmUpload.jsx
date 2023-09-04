import React, { useState, useEffect } from "react";
import cfucss from './../css/confirmupload.module.css';
import { useNavigate } from "react-router-dom";

function ConfirmUpload() {
    const navi = useNavigate()

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
                    <div className={`${cfucss['before-you-proceed']}`}>
                        <div className={cfucss['byp-h1']}>Before you proceed</div>
                        <div className={cfucss['byp-h2']}>Terms and Conditions for posting on InitiaRe's website:</div>
                        <ol type="1" className={cfucss['byp-list']}>
                            <li className={cfucss['byp-list-element']}>Submitted research articles must have appropriate content and language for an academic environment, and must not include language that promotes hatred or any provocation.</li>
                            <li className={cfucss['byp-list-element']}>Submitted articles have to fully meet all the criteria listed in the "Before Uploading" section.</li>
                            <li className={cfucss['byp-list-element']}>Prior to submission, the research article must have the consent of all the authors/co-authors.</li>
                            <li className={cfucss['byp-list-element']}>Submitted research articles must be the intellectual property of the author(s) and must not be borrowed, copied, plagiarized, or contain any materials copyrighted by a third party.</li>
                            <li className={cfucss['byp-list-element']}>Once an article has been peer-reviewed or specialist-reviewed, it will be made public and featured in the "Articles" section of InitiaRe, which can be accessed freely by other users of the InitiaRe website.</li>
                            <li className={cfucss['byp-list-element']}>The submitter has to frequently keep track of the Google Docs file and the InitiaRe website to identify the submission status or suggested revisions from InitiaRe.</li>
                            <li className={cfucss['byp-list-element']}>The submitter should be open to receiving constructive feedback from InitiaRe reviewers and actively revise their article accordingly.</li>
                            <li className={cfucss['byp-list-element']}>The submitter has to respond to emails and messages from InitiaRe and stay updated on the latest information regarding their article.</li>
                        </ol>
                        <div className={cfucss['byp-last-row']}>
                            <div className={`${cfucss['clickable-text-small']} ${cfucss['byp-cancel-button']}`} onClick={() => { navi(-1) }}>Cancel</div>
                            <div className={`${clicked ? cfucss['being-clicked'] : cfucss['not-being-clicked']} ${cfucss['byp-agree']}`} onClick={() => { handleContinue(); handleClick() }}>I agree</div>
                        </div>
                    </div>
                </div>
                <UploadPages classStage="second-stage" handleBack={handleBack} handleClick={handleClick} handleContinue={handleContinue} clicked={clicked} />
                <UploadPages classStage="third-stage" handleBack={handleBack} handleClick={handleClick} handleContinue={handleContinue} clicked={clicked} />
                <UploadPages classStage="fourth-stage" handleBack={handleBack} handleClick={handleClick} handleContinue={handleContinue} clicked={clicked} />
                <UploadPages classStage="fifth-stage" handleBack={handleBack} handleClick={handleClick} handleContinue={handleContinue} clicked={clicked} />
                <UploadPages classStage="sixth-stage" handleBack={handleBack} handleClick={handleClick} handleContinue={handleContinue} clicked={clicked} />
                <div className={`${cfucss['seventh-stage']} `}>
                    <div className={`${cfucss['back-button']} ${clicked ? cfucss['being-clicked'] : cfucss['not-being-clicked']}`} onClick={() => { handleBack(); handleClick() }}></div>
                </div>
            </div>
        </div>
    )
}

const UploadPages = ({classStage, handleBack, handleClick, handleContinue, clicked}) => {
    return (
        <div className={`${cfucss[classStage]}`}>
                    <div className={`${cfucss['continue-button']} ${clicked ? cfucss['being-clicked'] : cfucss['not-being-clicked']}`} onClick={() => { handleContinue(); handleClick() }}></div>
                    <div className={`${cfucss['back-button']} ${clicked ? cfucss['being-clicked'] : cfucss['not-being-clicked']}`} onClick={() => { handleBack(); handleClick() }}></div>
                </div>
    )
}

export default ConfirmUpload

// sample of continue button
// <div className={`${cfucss['continue-button']} ${clicked ? cfucss['being-clicked'] : cfucss['not-being-clicked']}`}  onClick={() => { handleContinue(); handleClick() }}></div>

// sample of back button
// <div className={`${cfucss['back-button']} ${clicked ? cfucss['being-clicked'] : cfucss['not-being-clicked']}`} onClick={() => { handleBack(); handleClick() }}></div>