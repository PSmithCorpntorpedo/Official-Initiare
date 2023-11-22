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
                <div className={uploadcss[`title-box`]}>
                    <p className={uploadcss[`big-title`]}>Preview Process</p>
                    <p className={uploadcss[`small-title`]}>for Research Proposal</p>
                </div>
                <div className={`${uploadcss[`first-step`]} ${uploadcss[`step`]}`}>
                    <div className={uploadcss[`step-title`]}>
                        <div className={uploadcss[`title-icon`]}>1</div>
                        <span>Upload</span>
                    </div>
                    <div className={uploadcss[`first-content`]}>
                        <div className={uploadcss[`first-content-wrapper`]}>
                            <div className={uploadcss[`first-content-icon`]}>1</div>
                            <span>Nhận sản phẩm được đăng tải trên account của người dùng</span>
                        </div>
                        <div className={uploadcss[`first-content-wrapper`]}>
                            <div className={uploadcss[`first-content-icon`]}>2</div>
                            <span>Sản phẩm sẽ ở trạng thái non-reviewed và được xếp vào các phân môn người dùng chọn trước khi đi vào quy trình bình duyệt</span>
                        </div>
                    </div>
                </div>
                <div className={`${uploadcss[`second-step`]} ${uploadcss[`step`]}`}>
                    <div className={uploadcss[`step-title`]}>
                        <div className={uploadcss[`title-icon`]}>2</div>
                        <span>Peer-critique</span>
                    </div>
                    <div className={uploadcss[`second-content`]}>
                        <div className={uploadcss[`second-content-wrapper`]}>
                            <div className={uploadcss[`phase-title-wrapper`]}>
                                <span className={uploadcss[`phase-number`]}>PHASE 1</span><span className={uploadcss[`phase-title`]}>Duyệt cấu trúc, thông tin, source, lập luận</span>
                            </div>
                            <div className={uploadcss[`phase-content`]}>Bình duyệt về cấu trúc, thông tin, source, lập luận, và gợi ý, hỗ trợ sửa chữa. Đối với research proposal và research report, bình duyệt viên đặt ra gợi ý chỉnh sửa và một bộ các câu hỏi phản biện (được thực hiện bởi các team chuyên môn thuộc Review Board). Đối với scientific poster, bình duyệt viên chỉ đặt ra gợi ý chỉnh sửa.</div>
                        </div>
                        <div className={uploadcss[`second-content-wrapper`]}>
                            <div className={uploadcss[`phase-title-wrapper`]}>
                                <span className={uploadcss[`phase-number`]}>PHASE 2</span><span className={uploadcss[`phase-title`]}>Duyệt câu hỏi phản biện</span>
                            </div>
                            <div className={uploadcss[`phase-content`]}>Các team leaders, heads và mentors duyệt qua các câu hỏi phản biện (đối với research proposal và research report) và gợi ý chỉnh sửa do bình duyệt viên đặt ra trước khi gửi cho người nộp bài</div>
                        </div>
                        <div className={uploadcss[`second-content-wrapper`]}>
                            <div className={uploadcss[`phase-title-wrapper`]}>
                                <span className={uploadcss[`phase-number`]}>PHASE 3</span><span className={uploadcss[`phase-title`]}>Bảo vệ luận án</span>
                            </div>
                            <div className={uploadcss[`phase-content`]}>Tác giả sẽ bảo vệ sản phẩm của mình bằng cách trả lời các câu hỏi phản biện (đối với research proposal và research report) và sửa chữa nếu cần thiết. Tác giả sẽ được hỗ trợ bởi team chuyên môn trong suốt quá trình này</div>
                        </div>
                        <div className={uploadcss[`second-content-wrapper`]}>
                            <div className={uploadcss[`phase-title-wrapper`]}>
                                <span className={uploadcss[`phase-number`]}>PHASE 4</span><span className={uploadcss[`phase-title`]}>Duyệt format, presentation, tone, trích dẫn</span>
                            </div>
                            <div className={uploadcss[`phase-content`]}>Bình duyệt về format, presentation (đối với research proposal và research report), trích dẫn, tone theo cấu trúc chuẩn (bởi ban Proofreading)</div>
                        </div>
                        <div className={uploadcss[`second-content-wrapper`]}>
                            <div className={uploadcss[`phase-title-wrapper`]}>
                                <span className={uploadcss[`phase-number`]}>PHASE 5</span><span className={uploadcss[`phase-title`]}>Format, presentation, visual aspects</span>
                            </div>
                            <div className={uploadcss[`phase-content`]}>Đối với scientific poster, hỗ trợ sửa format, presentation, các visual aspects của poster (bởi team Scientific Design)</div>
                        </div>
                    </div>
                </div>
                <div className={`${uploadcss[`third-step`]} ${uploadcss[`step`]}`}>
                    <div className={uploadcss[`step-title`]}>
                        <div className={uploadcss[`title-icon`]}>3</div>
                        <span>Specialist Review</span>
                    </div>
                    <div className={uploadcss[`third-content`]}>
                        {/* lmao im reusing the same styling without changing the name so the context makes no fucking sense */}
                        <div className={uploadcss[`phase-content`]}>Các bài research proposal và research report trong mỗi lĩnh vực sẽ được gửi cho các chuyên gia trong lĩnh vực tương ứng để thực hiện quy trình Specialist Review</div>
                        <div className={uploadcss[`phase-content`]}>Chuyên gia sẽ đặt câu hỏi phản biện và gợi ý sửa chữa để người viết hoàn thiện research proposal hoặc research report của bản thân</div>
                    </div>
                    <div className={uploadcss[`status-preview`]}>
                        <div className={`${uploadcss[`accepted`]} ${uploadcss[`status-bar`]}`} >ACCEPTED</div>
                        <div className={`${uploadcss[`rejected`]} ${uploadcss[`status-bar`]}`} >REJECTED</div>
                        <div className={`${uploadcss[`on-waitlist`]} ${uploadcss[`status-bar`]}`} >ON WAITLIST</div>
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