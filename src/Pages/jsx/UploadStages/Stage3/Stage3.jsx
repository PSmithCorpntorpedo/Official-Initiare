import React, { useState } from "react";
import u3css from "./Stage3.module.css";
import usePrimaryCategories from "../../../../Hooks/usePrimaryCategories";

export default function Stage3JSX() {
  
  return (
    <div className={`${u3css[`panel`]}`}>
      <p className={`${u3css[`primary-question`]}`}>
        What is the PRIMARY area of study of your paper?
        <br />
        <span>(no more than one area)</span>
      </p>
      <div className={`${u3css[`choices`]}`}>
        <div className={`${u3css[`option-wrapper`]}`}>
          <p className={`${u3css[`option-header`]}`}>Natural Sciences</p>
          <Options name="Life Sciences" />
          <Options name="Physical Sciences" />
          <Options name="Earth Sciences" />
          <Options name="Medical and Health" />
          <Options name="Mathematics" />
          <Options name="Formal Sciences" />
        </div>

        <div className={`${u3css[`option-wrapper`]}`}>
          <p className={`${u3css[`option-header`]}`}>Social Sciences</p>
          <Options name="Social Studies" />
          <Options name="Humanities" />
        </div>
      </div>
    </div>
  );
}

const Options = ({ name }) => {
  const {setPCategory} = usePrimaryCategories();
  return (
    <div className={`${u3css[`option`]}`}>
      <input
        type="radio"
        id={name}
        name="option"
        className={`${u3css[`radio-button`]}`}
        value={name}
        onChange={(e) => {
          setPCategory(e.target.value);
        }}
      />
      <label for={name} className={`${u3css[`option-label`]}`}>
        <span>{name}</span>
      </label>
    </div>
  );
};
