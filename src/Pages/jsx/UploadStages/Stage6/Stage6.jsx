import React, { useEffect, useState } from "react";
import u6css from "./Stage6.module.css";


export default function Stage6JSX({ setHasSelected }) {
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    if (ticks === 12) setHasSelected(true);
    else setHasSelected(false);
  }, [ticks]);


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
          ticks={ticks}
          setTicks={setTicks}
        />
        <Options
          name="Abstract"
          content=" A brief summary of the entire paper. Includes the research question, methodology, key findings, and conclusions."
          ticks={ticks}
          setTicks={setTicks}
        />
        <Options
          name="Introduction"
          content="Presents the background and context of the study. Clearly states the research problem or question. Reviews relevant literature and previous research. Outlines the objectives and goals of the study."
          ticks={ticks}
          setTicks={setTicks}
        />
        <Options
          name="Keywords"
          content="Words that define the research topic, important words/concepts found in your research question or thesis."
          ticks={ticks}
          setTicks={setTicks}
        />
        <Options
          name="Literature Review"
          content="Provides a comprehensive review of existing literature. Summarizes key findings from previous studies.  Identifies gaps or limitations in the literature.  Justifies the need for the current research. "
          ticks={ticks}
          setTicks={setTicks}
        />
        <Options
          name="Methodology"
          content="Describes the research design and approach.  Explains the data collection methods. Includes details about the study sample/participants.  Describes any instruments or tools used in data collection. Discusses the data analysis techniques applied."
          ticks={ticks}
          setTicks={setTicks}
        />
        <Options
          name="Results"
          content="Presents the findings of the study.  Utilizes tables, graphs, and charts to represent data, if applicable. Provides textual descriptions of the main results. "
          ticks={ticks}
          setTicks={setTicks}
        />
        <Options
          name="Discussion"
          content="Analyzes and interprets the results. Compares the findings with previous studies. Discusses any unexpected results and their implications. Explores the significance and limitations of the study."
          ticks={ticks}
          setTicks={setTicks}
        />
        <Options
          name="Conclusion"
          content="Summarizes the key findings. Restates the research question and the study's main contributions. Discusses the broader implications. Suggests areas for future research. 
          "
          ticks={ticks}
          setTicks={setTicks}
        />
        <Options
          name="References"
          content="Lists all the sources cited in the paper. Follows a specific citation style (APA)"
          ticks={ticks}
          setTicks={setTicks}
        />
        <Options
          name="Acknowledgement"
          content="Acknowledge individuals, institutions, or funding sources that contributed to the research"
          ticks={ticks}
          setTicks={setTicks}
        />
        <Options
          name="Appendix (Optional)"
          content="Consists of additional information that is too lengthy or detailed for the main text"
          ticks={ticks}
          setTicks={setTicks}
        />
      </div>
    </div>
  );
}

const Options = ({ name, content, ticks, setTicks }) => {
  const [isChosen, setIsChosen] = useState(false);

  function handleChange(e) {
    setIsChosen(!isChosen);
    let { checked } = e.target;

    if (checked) {
      setTicks(ticks + 1);
    } else if (!checked) {
      setTicks(ticks - 1);
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

      <label for={name} className={`${u6css[`label`]}`}>
        <div
          className={`${u6css[`before-primary-label`]} ${
            isChosen ? u6css[`chosen-label`] : u6css[`not-chosen`]
          }`}
        ></div>
        <span className={`${u6css[`content`]}`}>
          {name}: {content}
        </span>
      </label>
    </div>
  );
};
