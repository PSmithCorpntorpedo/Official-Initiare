import React, { useEffect, useState } from "react";
import u2css from "./Stage2.module.css";
import useFile from "../../../../Hooks/useFile";

const Stage2JSX = ({ setHasSelected }) => {
  const {setFile } = useFile();
  const [readUp, setReadUp] = useState(false);
  const [readDown, setReadDown] = useState(false);
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
      {!readUp && (
        <div className={u2css[`instructions-box`]}>
          <p>Please upload a file containing your paper (.docx, .pdf, etc.)</p>
          <div className={u2css[`understood`]}>
            <p onClick={() => setReadUp(true)}>I understand</p>
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
      {!readDown && (<div className={u2css[`instructions-box-down`]}>
          <p>For PIISE participants, name your files according the competition's rubrics: <span style={{"font-style": "bold" }}>(Brackets)_(Field)_(Representing Student's ID)</span></p>
          <p style={{"font-style": "italic" }}>E.g: "A_A1_210422", "B1_A4_210622", "C2_B5_220901", "B2_C_220909", or "B2_B1_220901_1" and "B2_B1_220901_2" if you have more than one work regarding one field </p>
          <div className={u2css[`understood`]}>
            <p onClick={() => setReadDown(true)}>I understand</p>
          </div>
        </div>)}
    </div>
  );
};

export default Stage2JSX;
