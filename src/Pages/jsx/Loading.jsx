import React from "react";
import loadingcss from "./../css/loading.module.css";

export default function Loading() {
  return (
    <div className={loadingcss["loader-wrapper"]}>
      {/* <span className={loadingcss["logging"]}>LOAD</span><span className={loadingcss["in"]}>ING...</span> */}
      <div className={loadingcss["loading"]}></div>
    </div>
  );
}
