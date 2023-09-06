import React, { useState } from "react";
import u4css from "./Stage4.module.css";
import usePrimaryCategories from "../../../../Hooks/usePrimaryCategories";

export default function Stage4JSX() {
  return (
    <div className={`${u4css[`panel`]}`}>
      <p className={`${u4css[`primary-question`]}`}>
        Is there any other area of research relevant to your paper? (You can
        choose more than one)
        <br />
        <span>Should there be none, please click "Next"</span>
      </p>
      <div className={`${u4css[`choices`]}`}>
        <div className={`${u4css[`option-wrapper`]}`}>
          <p className={`${u4css[`option-header`]}`}>Natural Sciences</p>
          <Options name="Life Sciences" />
          <Options name="Physical Sciences" />
          <Options name="Earth Sciences" />
          <Options name="Medical and Health" />
          <Options name="Mathematics" />
          <Options name="Formal Sciences" />
        </div>

        <div className={`${u4css[`option-wrapper`]}`}>
          <p className={`${u4css[`option-header`]}`}>Social Sciences</p>
          <Options name="Social Studies" />
          <Options name="Humanities" />
        </div>
      </div>
    </div>
  );
}

const Options = ({ name }) => {
  const {pCategory} = usePrimaryCategories();
  const [isChosen, setIsChosen] = useState(false);
  return (
    <div className={`${u4css[`option`]} ${pCategory !== "Primary" + name ? u4css[`vacant`] : u4css[`not-vacant`] } ${isChosen ? u4css[`chosen`] : u4css[`not-chosen`] }`}>
      <input
        type="checkbox"
        id={"Secondary" + name}
        name="option"
        className={`${u4css[`checkbox`]}`}
        value={"Secondary" + name}
        onChange={(e) => {
          // setPCategory(e.target.value);
          setIsChosen(!isChosen)
        }}
      />
      <label for={"Secondary" + name} className={`${u4css[`secondary-label`]} ${pCategory !== "Primary" + name ? u4css[`vacant`] : u4css[`not-vacant-label`] }` }>
        <span>{name}</span>
      </label>
    </div>
  );
};
