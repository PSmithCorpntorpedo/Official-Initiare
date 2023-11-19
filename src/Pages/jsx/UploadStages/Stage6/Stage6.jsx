import React/*, { useEffect, useState }*/ from "react";
import u6css from "./Stage6.module.css";
// import { /*faC,*/ faCheck } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePaperType from "../../../../Hooks/usePaperType";

export default function Stage6JSX({ setHasSelected }) {
  const { paperType } = usePaperType();
  
  const handleAgree = (e) => { 
      setHasSelected(e.target.checked)
  }

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
            />
            <Options
              name="Abstract"
              content=" A brief summary of the entire paper. Includes the research question, methodology, key findings, and conclusions."
            />
            <Options
              name="Introduction"
              content="Presents the background and context of the study. Clearly states the research problem or question. Reviews relevant literature and previous research. Outlines the objectives and goals of the study."
            />
            <Options
              name="Keywords"
              content="Words that define the research topic, important words/concepts found in your research question or thesis."
            />
            <Options
              name="Literature Review"
              content="Provides a comprehensive review of existing literature. Summarizes key findings from previous studies.  Identifies gaps or limitations in the literature.  Justifies the need for the current research. "
            />
            <Options
              name="Methodology"
              content="Describes the research design and approach.  Explains the data collection methods. Includes details about the study sample/participants.  Describes any instruments or tools used in data collection. Discusses the data analysis techniques applied."
            />
            <Options
              name="Results"
              content="Presents the findings of the study.  Utilizes tables, graphs, and charts to represent data, if applicable. Provides textual descriptions of the main results. "
            />
            <Options
              name="Discussion"
              content="Analyzes and interprets the results. Compares the findings with previous studies. Discusses any unexpected results and their implications. Explores the significance and limitations of the study."
            />
            <Options
              name="Conclusion"
              content="Summarizes the key findings. Restates the research question and the study's main contributions. Discusses the broader implications. Suggests areas for future research. 
          "
            />
            <Options
              name="References"
              content="Lists all the sources cited in the paper. Follows a specific citation style (APA)"
            />
            <Options
              name="Acknowledgement"
              content="Acknowledge individuals, institutions, or funding sources that contributed to the research"
            />
            <Options
              name="Appendix (Optional)"
              content="Consists of additional information that is too lengthy or detailed for the main text"
            />
          </>
        ) : (
          <>
            <Options
              name="Title"
              content="Clear, concise, and reflect the main focus of the review."
            />
            <Options
              name="Abstract"
              content=" A brief summary of the entire paper. Includes the research question, methodology, key findings, and conclusions."
            />
            <Options
              name="Keywords"
              content="Words that define the research topic, important words/concepts found in your research question or thesis."
            />
            <Options
              name="Introduction"
              content="Introduce the topic of the review and its significance in the field. Clearly state the objectives and scope of the review. Present the research question or theme that the review aims to address. Provide a brief overview of the key themes or subtopics."
            />
            <Options
              name="Methods (optional)"
              content="Eligibility criteria: Specify the inclusion and exclusion criteria for the review. Information sources: Specify all databases, registers, websites, organizations, reference lists and other sources searched or consulted to identify studies. Search strategy and selection process"
            />
            <Options
              name="Results"
              content="Study selection. Study characteristics: Cite each included study and present its characteristics. Risk of bias in studies: Present assessments of risk of bias for each included study. Results of individual studies."
            />
            <Options
              name="Discussion (optional)"
              content="Provide a general interpretation of the results in the context of other evidence. Discuss any limitations. Discuss implications of the results for practice, policy, and future research. Other information: Registration and protocol: registration information (name, number) or not registered. Support: describe sources of financial or non-financial support for the review. Competing interests"
            />
            <Options
              name="References"
              content="Lists all the sources cited in the paper. Follows a specific citation style (APA)"
            />
          </>
        )}
      </div>
      <div className={`${u6css[`user-agreement`]}`}>
        <input type="checkbox" onClick={handleAgree} className={`${u6css[`agree-checkbox`]}`} id="I-agree"/>
        <label for="I-agree">
          <span>I have made sure that my work has included all of the things mentioned above</span>
        </label>
      </div>
    </div>
  );
}

const Options = ({ name, content }) => {
  return (
    <div className={`${u6css[`option`]}`}>
        <span className={`${u6css[`content`]}`}>
          <span style={{"font-weight": "800", "color": "#2B52B7"}}>{name}</span>: {content}
        </span>
    </div>
  );
};
