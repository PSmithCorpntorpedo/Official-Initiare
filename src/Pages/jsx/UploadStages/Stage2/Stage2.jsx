import React, { /*useEffect,*/ useState } from "react";
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
          <p>Xin hãy nộp một file chứa bài nghiên cứu của bạn (.docx, .pdf, etc.)</p>
          <div className={u2css[`understood`]}>
            <p onClick={() => setReadUp(true)}>Tôi hiểu</p>
          </div>
        </div>
      )}
      <div className={`${u2css[`upload`]}`}>
        <p>Upload bài nghiên cứu của bạn</p>
        <div className={`${u2css[`upload-section`]}`}>
          <div className={`${u2css[`file-name`]}`}>
            {fileName ? fileName : <span>Chưa file nào được chọn...</span>}
          </div>
          <input type="file" id="file" onChange={SubmitHandler} />
          <label for="file">Browse</label>
        </div>
      </div>
      {!readDown && (<div className={u2css[`instructions-box-down`]}>
          <p>Cho những người tham gia PIISE, hãy điền tên file theo quy định của cuộc thi: <span style={{"font-weight": "900" }}>(Bảng tham gia)_(Lĩnh vực)_(MSHS đại diện, không dấu)</span></p>
          <p style={{"font-style": "italic" }}>E.g: "<span style={{"font-weight": "800" }}>A_A1_210422</span>", "<span style={{"font-weight": "800" }}>B1_A4_210622</span>", "<span style={{"font-weight": "800" }}>C2_B5_220901</span>", hoặc "<span style={{"font-weight": "800" }}>B2_B1_220901_1</span>" và "<span style={{"font-weight": "800" }}>B2_B1_220901_2</span>" trong trường hợp nhóm bạn đăng ký 2-3 ý tưởng cùng bảng báo cáo và lĩnh vực </p>
          <div className={u2css[`understood`]}>
            <p onClick={() => setReadDown(true)}>Tôi hiểu</p>
          </div>
        </div>)}
    </div>
  );
};

export default Stage2JSX;
