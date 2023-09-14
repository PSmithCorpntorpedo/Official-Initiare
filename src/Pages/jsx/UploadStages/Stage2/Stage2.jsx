import React, { useEffect, useState } from "react";
import u2css from "./Stage2.module.css";
import useFile from "../../../../Hooks/useFile";

const Stage2JSX = ({ setHasSelected }) => {
  const {setFile } = useFile();
  const [read, setRead] = useState(false);
  const [fileName, setFileName] = useState(null);

  const SubmitHandler = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    setHasSelected(true);
  };

  // useEffect(() => {
  //   if (fileName) {
  //     setHasSelected(true);
  //   }
  // }, [fileName]);
  return (
    <div className={`${u2css[`panel`]}`}>
      {!read && (
        <div className={u2css[`instructions-box`]}>
          <p>Please upload a file containing your paper (.docx, .pdf, etc.)</p>
          <div className={u2css[`understood`]}>
            <p onClick={() => setRead(true)}>I understand</p>
          </div>
        </div>
      )}
      <div className={`${u2css[`upload`]}`}>
        <p>Upload your research paper</p>
        <div className={`${u2css[`upload-section`]}`}>
          <div className={`${u2css[`file-name`]}`}>
            {fileName ? fileName : <span>No file has been chosen...</span>}
          </div>
          <input type="file" id="file" onChange={SubmitHandler} />
          <label for="file">Browse</label>
        </div>
      </div>
    </div>
  );
};

export default Stage2JSX;
