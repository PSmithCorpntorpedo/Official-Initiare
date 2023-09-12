import React from "react";
import { useState } from "react";
import u5css from "./Stage5.module.css";
import usePaperType from "../../../../Hooks/usePaperType";

export default function Stage5JSX({setHasSelected}) {
  const [chosenCat, setChosenCat] = useState("");
  const HandleChoose = (e) => {
    setChosenCat(e.target.value);
    setHasSelected(true)
  };
  return (
    <div className={`${u5css[`panel`]}`}>
      <p>What type of paper is being submitted?</p>
      <div className={`${u5css[`choices`]}`}>
        <Options
          name="Research Paper"
          setChosenCat={HandleChoose}
          chosenCat={chosenCat}
        />
        <Options
          name="Review Paper"
          setChosenCat={HandleChoose}
          chosenCat={chosenCat}
        />
        <Options
          name="Research Proposal"
          setChosenCat={HandleChoose}
          chosenCat={chosenCat}
        />
      </div>
    </div>
  );
}

const Options = ({ name, setChosenCat, chosenCat }) => {
  const { setPaperType } = usePaperType();

  return (
    <div
      className={`${u5css[`option`]} ${
        chosenCat === name ? u5css[`chosen`] : u5css[`not-chosen`]
      } `}
    >
      <input
        type="radio"
        id={name}
        name="option"
        className={`${u5css[`radio-button`]}`}
        value={name}
        onChange={(e) => {
          setPaperType(e.target.value);
          setChosenCat(e);
        }}
      />
      <label for={name} className={`${u5css[`primary-label-5`]}`}>
      <div className={`${u5css[`before-primary-label`]} ${chosenCat === name ? u5css[`chosen-label`] : u5css[`not-chosen`]}`}></div>
        <span>{name}</span>
      </label>
    </div>
  );
};
