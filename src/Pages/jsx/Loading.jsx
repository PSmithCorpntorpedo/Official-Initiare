import React from "react";
import loadingcss from "./../css/loading.module.css";

export default function Loading() {
  return (
    <div className={loadingcss["loader-wrapper"]}>
      <div className={loadingcss["loading"]}>LOADING...</div>
    </div>
  );
}
