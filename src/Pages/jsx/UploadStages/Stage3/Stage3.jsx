import React, { useState } from "react";
import u3css from "./Stage3.module.css";
import useCategories from "../../../../Hooks/useCategories";

export default function Stage3JSX({ setHasSelected }) {
  const [chosenCat, setChosenCat] = useState("");
  const HandleChoose = (e) => {
    setChosenCat(e.target.value);
    setHasSelected(true);
  };
  return (
    <div className={`${u3css[`panel`]}`}>
      <p className={`${u3css[`primary-question`]}`}>
        Chủ đề CHÍNH của bài báo là gì?
        <br />
        <span>(Chỉ chọn 1)</span>
      </p>
      <div className={`${u3css[`choices`]}`}>
        <div className={`${u3css[`option-wrapper`]}`}>
          <p className={`${u3css[`option-header`]}`}>Natural Sciences (KHTN)</p>
          <Options
            name="Life Sciences"
            setChosenCat={HandleChoose}
            chosenCat={chosenCat}
            vname="Khoa học Sự sống"
          />
          <Options
            name="Physical Sciences"
            setChosenCat={HandleChoose}
            chosenCat={chosenCat}
            vname = "Khoa học Vật chất"
          />
          <Options
            name="Earth Sciences"
            setChosenCat={HandleChoose}
            chosenCat={chosenCat}
            vname = "Khoa học Trái Đất"
          />
          <Options
            name="Medical and Health"
            setChosenCat={HandleChoose}
            chosenCat={chosenCat}
            vname = "Khoa học Y Khoa & Sức khoẻ"
          />
          <Options
            name="Mathematics"
            setChosenCat={HandleChoose}
            chosenCat={chosenCat}
            vname="Toán học"
          />
          <Options
            name="Formal Sciences"
            setChosenCat={HandleChoose}
            chosenCat={chosenCat}
            vname = "Công nghệ Thông tin-Khoa học Hình thức"
          />
        </div>

        <div className={`${u3css[`option-wrapper`]}`}>
          <p className={`${u3css[`option-header`]}`}>Social Sciences (KHXH)</p>
          <Options
            name="Social Studies"
            setChosenCat={HandleChoose}
            chosenCat={chosenCat}
            vname = "Khoa học xã hội"
          />
          <Options
            name="Economics"
            setChosenCat={HandleChoose}
            chosenCat={chosenCat}
            vname = "Kinh tế học"
          />
          <Options
            name="Psychology"
            setChosenCat={HandleChoose}
            chosenCat={chosenCat}
            vname = "Tâm lý học"
          />
          <Options
            name="Education"
            setChosenCat={HandleChoose}
            chosenCat={chosenCat}
            vname="Giáo dục"
          />
          <Options
            name="Culture and Arts"
            setChosenCat={HandleChoose}
            chosenCat={chosenCat}
            vname="Văn hóa & Nghệ thuật"
          />
        </div>
      </div>
      <div>
        <span className={`${u3css[`secondary-question`]}`}>Không biết phải chọn gì? Click vào</span><span> </span>
        <a href="https://docs.google.com/document/d/1aRNFvkblSFBSCObNsYPkuo6BKkQNW_Gm8PK60zEqhMI/edit">
          <></><span>đây</span>
        </a>
      </div>
    </div>
  );
}

const Options = ({ name, setChosenCat, chosenCat, vname }) => {
  // eslint-disable-next-line
  const { category, setCategory } = useCategories();
 // disabled eslint warning on this line because it's saying the category variable is unused

  return (
    <div
      className={`${u3css[`option`]} ${
        chosenCat === name ? u3css[`chosen`] : u3css[`not-chosen`]
      } `}
    >
      <input
        type="radio"
        id={"Primary" + name}
        name="option"
        className={`${u3css[`radio-button`]}`}
        value={name}
        onChange={(e) => {
          setCategory(e.target.value);
          setChosenCat(e);
        }}
      />
      <label for={"Primary" + name} className={`${u3css[`primary-label`]}`}>
        <div
          className={`${u3css[`before-primary-label`]} ${
            chosenCat === name ? u3css[`chosen-label`] : u3css[`not-chosen`]
          }`}
        ></div>
        <span>{vname}</span>
      </label>
    </div>
  );
};
