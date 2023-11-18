import React from 'react';
import { useNavigate } from 'react-router-dom';
import uploadcss from './../css/upload.module.css';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Upload() {
    const navi = useNavigate()

    return (
        <div className={uploadcss['upload-wrap']}>
            <div className={uploadcss['upload-page']}>
                <div className={uploadcss['page-content-wrapper']} id="page-content-wrapper">
                    <div className={uploadcss['main-text']}>The official review process will be updated later</div>
                    <div className={uploadcss['content-and-table-of-contents-wrap']}>
                        <div className={uploadcss['table-of-contents']}>
                            <div className={uploadcss['toc-title']}>Standard structure</div>
                            <div className={uploadcss['line-and-items-wrapper']}>
                                <div className={uploadcss['toc-line']}></div>
                                <div className={uploadcss['toc-item-list']}>
                                <a style={{ display: "block", textDecoration: "none", color: "inherit" }} href="#upload-abstract" className={uploadcss['toc-item']}>Abstract</a>
                                    {/* add an href attribute like the one above to make it scroll on click to the element with the given id*/}
                                    <a style={{ display: "block", textDecoration: "none", color: "inherit" }} href="#upload-introduction"className={uploadcss['toc-item']}>Introduction</a>
                                    <a style={{ display: "block", textDecoration: "none", color: "inherit" }} href="#upload-section-snippets" className={uploadcss['toc-item']}>Section snippets</a>
                                    <a style={{ display: "block", textDecoration: "none", color: "inherit" }} href="#upload-reference" className={uploadcss['toc-item']}>Reference</a>
                                    <a style={{ display: "block", textDecoration: "none", color: "inherit" }} href="#upload-recommended-articles" className={uploadcss['toc-item']}>Recommended articles</a>
                                </div>
                            </div>
                        </div>
                        <div className={uploadcss['content']}>
                            <div className={uploadcss['structure-title']}>Standard structure of a scientific paper</div>
                            <ul className={uploadcss['structure-list']}>
                                <li className={uploadcss['main-bullet-point']}><span className={`${uploadcss['small-blue-text']} ${uploadcss['bullet-point-title']}`}>Title: </span>concise, informative, and accurately reflects the main topic.</li>
                                <li className={uploadcss['main-bullet-point']}><span className={`${uploadcss['small-blue-text']} ${uploadcss['bullet-point-title']}`} id="upload-abstract">Abstract: </span>a brief summary, must be limited in length, and provides a clear overview of the paper's contents, including the subject, methodology, key results, and conclusions</li>
                                <li className={uploadcss['main-bullet-point']}><span className={`${uploadcss['small-blue-text']} ${uploadcss['bullet-point-title']}`}>Keywords: </span>key terms that improve the article's searchability</li>
                                <li className={uploadcss['main-bullet-point']}><span className={`${uploadcss['small-blue-text']} ${uploadcss['bullet-point-title']}`}>Authors </span></li>
                                <li className={uploadcss['main-bullet-point']}><span className={`${uploadcss['small-blue-text']} ${uploadcss['bullet-point-title']}`}>Introduction: </span>introduces the subject, background, states the objective and hypothesis</li>
                                <li className={uploadcss['main-bullet-point']}><span className={`${uploadcss['small-blue-text']} ${uploadcss['bullet-point-title']}`}>Literature review: </span>a demonstration of scholarly sources related to the topic, establishes the context, identifies the research gaps and justify the research</li>
                                <li className={uploadcss['main-bullet-point']}><span className={`${uploadcss['small-blue-text']} ${uploadcss['bullet-point-title']}`}>Materials and methods: </span>describes the design of the experiment(s) as well as the methodology and materials used</li>
                                {/* <li className={uploadcss['main-bullet-point']}><span className={`${uploadcss['small-blue-text']} ${uploadcss['bullet-point-title']}`}>Additional information: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, iure? Expedita a pariatur voluptatem nemo dignissimos dolorem soluta est magni.</li>
                                <li className={uploadcss['main-bullet-point']}><span className={`${uploadcss['small-blue-text']} ${uploadcss['bullet-point-title']}`}>Lorem Ipsum: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque magni quam inventore nam dolorem minus sequi suscipit, quas, omnis perferendis veniam molestiae voluptatibus libero ipsam eveniet in a odio ea?</li>
                                <li className={uploadcss['main-bullet-point']}><span className={`${uploadcss['small-blue-text']} ${uploadcss['bullet-point-title']}`}>Lorem Ipsum: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque magni quam inventore nam dolorem minus sequi suscipit, quas, omnis perferendis veniam molestiae voluptatibus libero ipsam eveniet in a odio ea?</li>
                                <li className={uploadcss['main-bullet-point']}><span className={`${uploadcss['small-blue-text']} ${uploadcss['bullet-point-title']}`}>Lorem Ipsum: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque magni quam inventore nam dolorem minus sequi suscipit, quas, omnis perferendis veniam molestiae voluptatibus libero ipsam eveniet in a odio ea?</li>
                                <li className={uploadcss['main-bullet-point']}><span className={`${uploadcss['small-blue-text']} ${uploadcss['bullet-point-title']}`}>Lorem Ipsum: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque magni quam inventore nam dolorem minus sequi suscipit, quas, omnis perferendis veniam molestiae voluptatibus libero ipsam eveniet in a odio ea?</li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={uploadcss['pop-up-wrapper']}>
                <div className={uploadcss['pop-up']}>
                    <div className={uploadcss['pop-up-text']}>Ready to submit your paper?</div>
                    <div onClick={() => {navi('/confirm-upload')}} className={uploadcss['pop-up-button']}><FontAwesomeIcon className={uploadcss['upload-icon']} icon={faCloudArrowUp}/> Upload</div>
                </div>
            </div>
        </div>
    )
}

export default Upload;