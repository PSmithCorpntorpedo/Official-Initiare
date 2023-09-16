import React from "react";
import u7css from "../Stage7/Stage7.module.css";


export default function Stage7UploadingJSX() {
  return (
    <div className={`${u7css["page-wrapper"]}`}>
      <img src="/Images/uploading-icon.svg" className={`${u7css["icon"]}`}/>
      <div className={`${u7css["panel"]}`}>
        <div className={`${u7css["message"]}`}>
          <h1>Uploading...</h1>
          <p>This will take a few seconds depending on your connection</p>
        </div>
      </div>
    </div>
  );
}
