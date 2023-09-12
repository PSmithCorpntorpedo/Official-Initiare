import React, { useEffect, useState } from "react";
import u4css from "./Stage4.module.css";
import useSubCategories from "../../../../Hooks/useSubCategories";
import useCategories from "../../../../Hooks/useCategories";

export default function Stage4JSX({setHasSelected}) {
  useEffect(() => setHasSelected(true))
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
          <Options name="Humanities"/>
        </div>
      </div>
    </div>
  );
}

const Options = ({ name }) => {
  const { category } = useCategories();
  const [isChosen, setIsChosen] = useState(false);
  const { subCategory, setSubCategory } = useSubCategories();
 
  function handleChange(e) {
    setIsChosen(!isChosen)
    let { value, checked } = e.target;

    if (checked) {
      setSubCategory([...subCategory, value]);
      
    } else if (!checked) {
      const newSubCategories = subCategory.filter(cat => cat !== value)
      setSubCategory(newSubCategories);
    }
  }

  useEffect(() => {
    const newSubCategories = subCategory.filter(cat => cat !== category)
    setSubCategory(newSubCategories)
    if(category === name) setIsChosen(false)
  }, [category])


  return (
    <div
      className={`${u4css[`option`]} ${
        category !== name ? u4css[`vacant`] : u4css[`not-vacant`]
      } ${isChosen ? u4css[`chosen`] : u4css[`not-chosen`]}`}
    >
      {category !== name ? (
        <input
          type="checkbox"
          id={"Secondary" + name}
          name="option"
          className={`${u4css[`checkbox`]}`}
          value={name}
          onChange={handleChange}
        />
      ) : null}

      <label
        for={"Secondary" + name}
        className={`${u4css[`secondary-label`]} ${
          category !== name ? u4css[`vacant`] : u4css[`not-vacant-label`]
        }`}
      >
        <span>{name}</span>
      </label>
    </div>
  );
};
