import React from "react";
import u7css from "../Stage7/Stage7.module.css";
import { useNavigate } from "react-router-dom";

export default function Stage7SuccessJSX() {
  const navi = useNavigate();
  return (
    <div className={`${u7css["page-wrapper"]}`}>
      <img alt="" src="/Images/success-icon.svg" className={`${u7css["icon"]}`} />
      <div className={`${u7css["panel"]}`}>
        <div className={`${u7css["message"]}`}>
          <h1>Đã thành công!</h1>
          <p>Bạn đã nộp bài nghiên cứu của mình lên InitiaRe.</p>
          <button onClick={() => navi("/")} className={`${u7css["return-button"]}`}>Về Homepage</button>
        </div>
      </div>
    </div>
  );
}
