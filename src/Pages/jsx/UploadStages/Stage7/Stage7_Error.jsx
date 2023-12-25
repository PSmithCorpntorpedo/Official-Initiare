import React from "react";
import u7css from "../Stage7/Stage7.module.css";

export default function Stage7ErrorJSX() {
  return (
    <div className={`${u7css["page-wrapper"]}`}>
      <img alt="" src="/Images/error-icon.svg" className={`${u7css["icon"]}`} />
      <div className={`${u7css["panel"]}`}>
        <div className={`${u7css["message"]} ${u7css["error-message"]}`}>
          <h1 style={{"color": "red"}}>Đã có lỗi!</h1>
          <p>Một lỗi đã xuất hiện trong quá trình nộp, xin hãy thử lại.</p>
          <p>Nếu lỗi vẫn xuất hiện, hãy liên hệ chúng tôi qua <a href="http://m.me/InitiaRe.OpenJournal" target="_blank" rel="noopener noreferrer" style={{"font-weight": "bold"}}>trang Facebook</a> </p>
          <button onClick={() => window.location.reload()} className={`${u7css["error-return-button"]}`}>Thử lại</button>
        </div>
      </div>
    </div>
  );
}
