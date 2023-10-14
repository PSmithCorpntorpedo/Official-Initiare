import React, { useEffect, useState } from "react";
import u6css from "./Stage6.module.css";
import { /*faC,*/ faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePaperType from "../../../../Hooks/usePaperType";

export default function Stage6JSX({ setHasSelected }) {
  const [ticks, setTicks] = useState(0);
  const { paperType } = usePaperType();

  useEffect(() => {
    if (paperType === "Research Proposal" || paperType === "Research Paper") {
      if (ticks === 12 || ticks === -12) setHasSelected(true);
      else setHasSelected(false);
    } else {
      if (ticks === -8 || ticks === 8 ) setHasSelected(true);
      else setHasSelected(false);
    }
  }, [ticks, paperType, setHasSelected]);

  return (
    <div className={`${u6css[`panel`]}`}>
      <p>
        Before submitting, ensure your review paper satisfy all of the following
        criteria.
      </p>
      <div className={`${u6css[`tickboxes`]}`}>
        {paperType === "Research Proposal" || paperType === "Research Paper" ? (
          <>
            <Options
              name="Title"
              content="Clear, concise, and reflect the main focus of the review."
              ticks={ticks}
              setTicks={setTicks}
              uniq={1}
            />
            <Options
              name="Abstract"
              content=" A brief summary of the entire paper. Includes the research question, methodology, key findings, and conclusions."
              ticks={ticks}
              setTicks={setTicks}
              uniq={2}
            />
            <Options
              name="Introduction"
              content="Presents the background and context of the study. Clearly states the research problem or question. Reviews relevant literature and previous research. Outlines the objectives and goals of the study."
              ticks={ticks}
              setTicks={setTicks}
              uniq={3}
            />
            <Options
              name="Keywords"
              content="Words that define the research topic, important words/concepts found in your research question or thesis."
              ticks={ticks}
              setTicks={setTicks}
              uniq={4}
            />
            <Options
              name="Literature Review"
              content="Provides a comprehensive review of existing literature. Summarizes key findings from previous studies.  Identifies gaps or limitations in the literature.  Justifies the need for the current research. "
              ticks={ticks}
              setTicks={setTicks}
              uniq={5}
            />
            <Options
              name="Methodology"
              content="Describes the research design and approach.  Explains the data collection methods. Includes details about the study sample/participants.  Describes any instruments or tools used in data collection. Discusses the data analysis techniques applied."
              ticks={ticks}
              setTicks={setTicks}
              uniq={6}
            />
            <Options
              name="Results"
              content="Presents the findings of the study.  Utilizes tables, graphs, and charts to represent data, if applicable. Provides textual descriptions of the main results. "
              ticks={ticks}
              setTicks={setTicks}
              uniq={7}
            />
            <Options
              name="Discussion"
              content="Analyzes and interprets the results. Compares the findings with previous studies. Discusses any unexpected results and their implications. Explores the significance and limitations of the study."
              ticks={ticks}
              setTicks={setTicks}
              uniq={8}
            />
            <Options
              name="Conclusion"
              content="Summarizes the key findings. Restates the research question and the study's main contributions. Discusses the broader implications. Suggests areas for future research. 
          "
              ticks={ticks}
              setTicks={setTicks}
              uniq={9}
            />
            <Options
              name="References"
              content="Lists all the sources cited in the paper. Follows a specific citation style (APA)"
              ticks={ticks}
              setTicks={setTicks}
              uniq={10}
            />
            <Options
              name="Acknowledgement"
              content="Acknowledge individuals, institutions, or funding sources that contributed to the research"
              ticks={ticks}
              setTicks={setTicks}
              uniq={11}
            />
            <Options
              name="Appendix (Optional)"
              content="Consists of additional information that is too lengthy or detailed for the main text"
              ticks={ticks}
              setTicks={setTicks}
              uniq={12}
            />
          </>
        ) : (
          <>
            <Options
              name="Title"
              content="Clear, concise, and reflect the main focus of the review."
              ticks={ticks}
              setTicks={setTicks}
              uniq={13}
            />
            <Options
              name="Abstract"
              content=" A brief summary of the entire paper. Includes the research question, methodology, key findings, and conclusions."
              ticks={ticks}
              setTicks={setTicks}
              uniq={14}
            />
            <Options
              name="Keywords"
              content="Words that define the research topic, important words/concepts found in your research question or thesis."
              ticks={ticks}
              setTicks={setTicks}
              uniq={15}
            />
            <Options
              name="Introduction"
              content="Introduce the topic of the review and its significance in the field. Clearly state the objectives and scope of the review. Present the research question or theme that the review aims to address. Provide a brief overview of the key themes or subtopics."
              ticks={ticks}
              setTicks={setTicks}
              uniq={16}
            />
            <Options
              name="Methods (optional)"
              content="Eligibility criteria: Specify the inclusion and exclusion criteria for the review. Information sources: Specify all databases, registers, websites, organizations, reference lists and other sources searched or consulted to identify studies. Search strategy and selection process"
              ticks={ticks}
              setTicks={setTicks}
              uniq={17}
            />
            <Options
              name="Results"
              content="Study selection. Study characteristics: Cite each included study and present its characteristics. Risk of bias in studies: Present assessments of risk of bias for each included study. Results of individual studies."
              ticks={ticks}
              setTicks={setTicks}
              uniq={18}
            />
            <Options
              name="Discussion (optional)"
              content="Provide a general interpretation of the results in the context of other evidence. Discuss any limitations. Discuss implications of the results for practice, policy, and future research. Other information: Registration and protocol: registration information (name, number) or not registered. Support: describe sources of financial or non-financial support for the review. Competing interests"
              ticks={ticks}
              setTicks={setTicks}
              uniq={19}
            />
            <Options
              name="References"
              content="Lists all the sources cited in the paper. Follows a specific citation style (APA)"
              ticks={ticks}
              setTicks={setTicks}
              uniq={20}
            />
          </>
        )}
      </div>
    </div>
  );
}

const Options = ({ name, content, ticks, setTicks, uniq }) => {
  const [isChosen, setIsChosen] = useState(false);
  const { paperType } = usePaperType();

  useEffect(() => {
    setTicks(0);
    setIsChosen(false);
  }, [paperType, setTicks]);

  function handleChange(e) {
    setIsChosen(!isChosen);
    let { checked } = e.target;

    if (checked) {
      setTicks(ticks + 1);
    } else if (!checked) {
      setTicks(ticks - 1);
    }
    console.log(`checked + ${ticks}`);

    console.log(uniq);
  }

  return (
    <div
      className={`${u6css[`option`]} ${
        isChosen ? u6css[`chosen`] : u6css[`not-chosen`]
      }`}
    >
      <input
        type="checkbox"
        id={uniq}
        name="option"
        className={`${u6css[`checkbox`]}`}
        value={uniq}
        onChange={handleChange}
      />

      <label for={uniq} className={`${u6css[`label`]}`}>
        <div
          className={`${u6css[`before-primary-label`]} ${
            isChosen ? u6css[`chosen-label`] : u6css[`not-chosen`]
          }`}
        >
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <span className={`${u6css[`content`]}`}>
          {name}: {content}
        </span>
      </label>
    </div>
  );
};
