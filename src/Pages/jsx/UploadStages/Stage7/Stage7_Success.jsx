import React from "react";
import u7css from "../Stage7/Stage7.module.css";
import { useNavigate } from "react-router-dom";

export default function Stage7SuccessJSX() {
  const navi = useNavigate();
  return (
    <div className={`${u7css["page-wrapper"]}`}>
      <img src="/Images/success-icon.svg" className={`${u7css["icon"]}`} />
      <div className={`${u7css["panel"]}`}>
        <div className={`${u7css["message"]}`}>
          <h1>Success!</h1>
          <p>You have submitted your article on InitiaRe.</p>
          <button onClick={() => navi("/")} className={`${u7css["return-button"]}`}>Return to Homepage</button>
        </div>
      </div>
    </div>
  );
}
