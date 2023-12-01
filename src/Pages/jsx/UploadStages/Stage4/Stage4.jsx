import React, { useEffect, useState } from "react";
import u4css from "./Stage4.module.css";
import useSubCategories from "../../../../Hooks/useSubCategories";
import useCategories from "../../../../Hooks/useCategories";
import { /*faC,*/ faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Stage4JSX({setHasSelected}) {
  useEffect(() => setHasSelected(true))
  return (
    <div className={`${u4css[`panel`]}`}>
      <p className={`${u4css[`primary-question`]}`}>
          Bài báo của bạn còn gồm chủ đề nào liên quan nữa không? (Có thể chọn nhiều hơn 1)
        <br />
        <span>Nếu không có, hãy nhấn "Next"</span>
      </p>
      <div className={`${u4css[`choices`]}`}>
        <div className={`${u4css[`option-wrapper`]}`}>
          <p className={`${u4css[`option-header`]}`}>Natural Sciences (KHTN)</p>
          <Options name="Life Sciences" vname="Khoa học Sự sống"/>
          <Options name="Physical Sciences" vname = "Khoa học Vật chất"/>
          <Options name="Earth Sciences" vname = "Khoa học Trái Đất"/>
          <Options name="Medical and Health" vname = "Khoa học Y Khoa & Sức khoẻ"/>
          <Options name="Mathematics" vname="Toán học"/>
          <Options name="Formal Sciences" vname = "Công nghệ Thông tin-Khoa học Hình thức"/>
        </div>

        <div className={`${u4css[`option-wrapper`]}`}>
          <p className={`${u4css[`option-header`]}`}>Social Sciences (KHXH)</p>
          <Options name="Social Studies" vname = "Khoa học xã hội"/>
          <Options name="Economics" vname = "Kinh tế học"/>
          <Options name="Psychology"  vname = "Tâm lý học"/>
          <Options name="Education" vname="Giáo dục"/>
          <Options name="Culture and Arts" vname="Văn hóa & Nghệ thuật"/>
        </div>
      </div>
    </div>
  );
}

const Options = ({ name, vname }) => {
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
  // eslint-disable-next-line
  useEffect(() => {
    const newSubCategories = subCategory.filter(cat => cat !== category)
    setSubCategory(newSubCategories)
    if(category === name) setIsChosen(false)
  }, [category, name, setSubCategory, subCategory])


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
      ><div className={`${u4css[`before-secondary-label`]} ${isChosen ? u4css[`chosen-label`] : u4css[`not-chosen`]}`}>{isChosen  && <FontAwesomeIcon icon={faCheck} />} {category === name  && <FontAwesomeIcon icon={faCheck} />}</div>
        <span>{vname}</span>
      </label>
    </div>
  );
};
