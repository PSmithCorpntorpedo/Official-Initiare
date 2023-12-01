import React from "react";
import u7css from "../Stage7/Stage7.module.css";


export default function Stage7UploadingJSX() {
  return (
    <div className={`${u7css["page-wrapper"]}`}>
      <img alt="" src="/Images/uploading-icon.svg" className={`${u7css["icon"]}`}/>
      <div className={`${u7css["panel"]}`}>
        <div className={`${u7css["message"]}`}>
          <h1>Đang Upload...</h1>
          <p>Thời gian nộp sẽ tùy thuộc vào kết nối mạng của bạn</p>
        </div>
      </div>
    </div>
  );
}
