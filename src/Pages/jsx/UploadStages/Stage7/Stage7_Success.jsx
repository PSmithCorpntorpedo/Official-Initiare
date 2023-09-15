import React from "react";
import u7css from "../Stage7/Stage7.module.css";
import { useNavigate } from "react-router-dom";

export default function Stage7SuccessJSX() {
  const navi = useNavigate();
  return (
    <div className={`${u7css["panel"]}`}>
      <div className={`${u7css["message"]}`}>
        <h1>Success!</h1>
        <p>You have submitted your article on InitiaRe.</p>
        <button onClick={() => navi("/")}>Return to Homepage</button>
      </div>
    </div>
  );
}
