import React, { useState } from "react";
import u6css from "./Stage6.module.css";
import useFile from "../../../../Hooks/useFile";
import useAuth from "../../../../Hooks/useAuth";
import useCategories from "../../../../Hooks/useCategories";
import useSubCategories from "../../../../Hooks/useSubCategories";
import usePaperType from "../../../../Hooks/usePaperType";

export default function Stage6JSX() {
  const { category } = useCategories();
  const { paperType } = usePaperType();
  const { subCategory } = useSubCategories();
  const { file } = useFile();
  const { auth } = useAuth();

  const handleClick = () => {
    if (!file) {
      console.log("There is no file as of now, please upload one");
      return;
    }

    const fd = new FormData();
    fd.append("file", file);
    uploadFile(fd);
  };

  const uploadFile = async (fd) => {
    await fetch(
      "https://initiare-website-2603191647bb.herokuapp.com/api/v1/storage/media/upload",
      {
        mode: "cors",
        method: "POST",
        headers: {
          Authorization: "Bearer " + auth.accessToken,
        },
        body: fd,
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data.res.download_url)); //change later when user download is viable
  };

  return (
    <div className={`${u6css[`panel`]}`}>
      <p>
        Before submitting, ensure your review paper satisfy all of the following
        criteria.
      </p>
      <div className={`${u6css[`tickboxes`]}`}>
        <Options
          name="Title"
          content="Clear, concise, and reflect the main focus of the review."
        />
        <Options
          name="Abstract"
          content=" A brief summary of the entire paper. Includes the research question, methodology, key findings, and conclusions."
        />
        <Options
          name="Introduction"
          content="
        -Presents the background and context of the study. 
         -Clearly states the research problem or question.  
         -Reviews relevant literature and previous research. 
          -Outlines the objectives and goals of the study. "
        />
        <Options
          name="Keywords"
          content="Words that define the research topic, important words/concepts found in your research question or thesis."
        />
        <Options
          name="Keywords"
          content="Words that define the research topic, important words/concepts found in your research question or thesis."
        />
        
      </div>
    </div>
  );
}

const Options = ({ name, content }) => {
  const [isChosen, setIsChosen] = useState(false);
  function handleChange(e) {
    setIsChosen(!isChosen);
    let { checked } = e.target;

    if (checked) {
    } else if (!checked) {
    }
  }

  return (
    <div
      className={`${u6css[`option`]} ${
        isChosen ? u6css[`chosen`] : u6css[`not-chosen`]
      }`}
    >
      <input
        type="checkbox"
        id={name}
        name="option"
        className={`${u6css[`checkbox`]}`}
        value={name}
        onChange={handleChange}
      />
      <div
        className={`${u6css[`before-primary-label`]} ${
          isChosen ? u6css[`chosen-label`] : u6css[`not-chosen`]
        }`}
      ></div>
      <label for={name} className={`${u6css[`label`]}`}>
        <span>
          {name}: {content}
        </span>
      </label>
    </div>
  );
};
