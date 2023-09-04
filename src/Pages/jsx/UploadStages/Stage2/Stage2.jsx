import React from "react";
import u2css from "./Stage2.module.css";
import useFile from "../../../../Hooks/useFile";


const Stage2JSX = () => {
  const { setFile } = useFile();
//   const { auth } = useAuth();
  
//   const handleClick = () => {
//     if (!file) {
//       console.log("There is no file as of now, please upload one");
//       return;
//     }

//     const fd = new FormData();
//     fd.append("file", file);
//     uploadFile(fd);
//   };

//   const uploadFile = async (fd) => {
//     await fetch(
//       "https://initiare-website-2603191647bb.herokuapp.com/api/v1/storage/media/upload",
//       {
//         mode: "cors",
//         method: "POST",
//         headers: {
//           Authorization: "Bearer " + auth.accessToken,
//         },
//         body: fd,
//       }
//     )
//       .then(console.log("success"))
//       .catch(console.log("bruh"));
//   };

  return (
    <div className={`${u2css[`upload-window`]}`}>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      {/* <button onClick={handleClick}>Upload File</button> */}
    </div>
  );
};

export default Stage2JSX;
