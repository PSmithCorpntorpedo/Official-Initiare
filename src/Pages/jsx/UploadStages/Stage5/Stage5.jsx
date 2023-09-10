import React from 'react';
import { useState } from 'react';
import u5css from "./Stage5.module.css";

export default function Stage5JSX() {
  const [chosenCat, setChosenCat] = useState("");
  const HandleChoose = (e) => {
    setChosenCat(e.target.value);
  }
  return (
    <div className={`${u5css[`panel`]}`}>
      <p>What type of paper is being submitted?</p>
      <div className={`${u5css[`choices`]}`}>
          <Options name="Research Paper" setChosenCat={HandleChoose} chosenCat={chosenCat}/>
          <Options name="Review Paper" setChosenCat={HandleChoose} chosenCat={chosenCat}/>
          <Options name="Research Proposal" setChosenCat={HandleChoose} chosenCat={chosenCat}/>
        </div>
      </div>
    
  )
}

const Options = ({ name, setChosenCat, chosenCat }) => {
  // const {setPCategory} = usePrimaryCategories();
  
  return (
    <div className={`${u5css[`option`]} ${chosenCat === "Primary" + name ? u5css[`chosen`] : u5css[`not-chosen`]} `}>
      <input 
        type="radio"
        id={"Primary" + name}
        name="option"
        className={`${u5css[`radio-button`]}`}
        value={"Primary" + name}
        onChange={(e) => {
          // setPCategory(e.target.value);
          setChosenCat(e)
        }}
      />
      <label for={"Primary" + name} className={`${u5css[`primary-label`]}`}>
        <span>{name}</span>
      </label>
    </div>
  );
};
