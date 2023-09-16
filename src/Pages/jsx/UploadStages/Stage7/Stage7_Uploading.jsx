import React from "react";
import u7css from "../Stage7/Stage7.module.css";
// import { useNavigate } from "react-router-dom"; 

export default function Stage7UploadingJSX() {
  // const navi = useNavigate()
  return (
    <div className={`${u7css["panel"]}`}>
      <div className={`${u7css["message"]}`}>
        <h1>Uploading...</h1>
        <p>This will take a few seconds depending on your connection</p>
        
      </div>
    </div>
  );
}
