import React, { useState, useEffect } from "react";
import cfucss from "./../css/confirmupload.module.css";
import { useNavigate } from "react-router-dom";
import useFile from "../../Hooks/useFile";
import useAuth from "../../Hooks/useAuth";
import useCategories from "../../Hooks/useCategories";
import useSubCategories from "../../Hooks/useSubCategories";
import usePaperType from "../../Hooks/usePaperType";
import Stage2JSX from "./UploadStages/Stage2/Stage2.jsx";
import Stage3JSX from "./UploadStages/Stage3/Stage3.jsx";
import Stage4JSX from "./UploadStages/Stage4/Stage4.jsx";
import Stage5JSX from "./UploadStages/Stage5/Stage5.jsx";
import Stage6JSX from "./UploadStages/Stage6/Stage6.jsx";
import Stage7JSX from "./UploadStages/Stage7/Stage7.jsx";

function ConfirmUpload() {
  const navi = useNavigate();
  const [stage, setStage] = useState(1);

  const handleContinue = () => {
    let k = stage;
    setStage(k + 1);
  };

  const handleBack = () => {
    let k = stage;
    setStage(k - 1);
  };

  const ordinals = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
  ];

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setClicked(false);
      }, 500);
    }
  }, [clicked, setClicked]);
  const { category } = useCategories();
  const { paperType } = usePaperType();
  const { subCategory } = useSubCategories();
  const { file } = useFile();
  const { auth } = useAuth();

  let sCategory;
  switch (category) {
    case "Life Sciences":
      sCategory = 45;
      break;
    case "Physical Sciences":
      sCategory = 38;
      break;
    case "Earth Sciences":
      sCategory = 39;
      break;
    case "Medical and Health":
      sCategory = 40;
      break;
    case "Mathematics":
      sCategory = 41;
      break;
    case "Formal Sciences":
      sCategory = 42;
      break;
    case "Social Studies":
      sCategory = 43;
      break;
    case "Humanities":
      sCategory = 44;
      break;
  }

  let sSubCategory = "";
  for (let i = 0; i < subCategory.length; i++) {
    let temp;
    let current = sSubCategory;
    switch (subCategory[i]) {
      case "Life Sciences":
        temp = 45;
        break;
      case "Physical Sciences":
        temp = 38;
        break;
      case "Earth Sciences":
        temp = 39;
        break;
      case "Medical and Health":
        temp = 40;
        break;
      case "Mathematics":
        temp = 41;
        break;
      case "Formal Sciences":
        temp = 42;
        break;
      case "Social Studies":
        temp = 43;
        break;
      case "Humanities":
        temp = 44;
        break;
    }
    sSubCategory = current.concat(",", temp);
  }

  let sPaperType;
  switch (paperType) {
    case "Research Paper":
      sPaperType = 0;
      break;
    case "Review Paper":
      sPaperType = 1;
      break;
    case "Research Proposal":
      sPaperType = 2;
      break;
  }

  const handleSubmit = () => {
    if (!file) {
      console.log("There is no file as of now, please upload one");
      return;
    }

    const fd = new FormData();
    fd.append("file", file);
    uploadFile(fd);
  };

  const uploadFile = async (fd) => {
    await fetch(
      "https://initiare-website-2603191647bb.herokuapp.com/api/v1/storage/media/upload",
      {
        mode: "cors",
        method: "POST",
        headers: {
          Authorization: "Bearer " + auth.accessToken,
        },
        body: fd,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        fetch(
          "https://initiare-website-2603191647bb.herokuapp.com/api/v1/articles",
          {
            mode: "cors",
            method: "POST",
            "Content-Type": "application/json",
            accept: "application/json",
            headers: {
              Authorization: "Bearer " + auth.accessToken,
            },
            body: JSON.stringify({
              category_id: sCategory,
              content: "Real test 1",
              pre_publish_content: "testing",
              publish_date: "2023-09-12T14:48:00.000Z",
              short_brief: "brief",
              sub_category_ids: sSubCategory,
              thumbnail: "thumbnail",
              title: "title",
              type_id: sPaperType,
            }),
          }
        );
      });
  };

  return (
    <div className={cfucss["confirm-upload-page-wrap"]}>
      <div
        className={`${cfucss["plane-of-existence"]} ${
          cfucss[`on-${ordinals[stage - 1]}-stage`]
        }`}
      >
        <div className={`${cfucss["first-stage"]} `}>
          <div className={`${cfucss["before-you-proceed"]}`}>
            <div className={cfucss["byp-h1"]}>Before you proceed</div>
            <div className={cfucss["byp-h2"]}>
              Terms and Conditions for posting on InitiaRe's website:
            </div>
            <ol type="1" className={cfucss["byp-list"]}>
              <li className={cfucss["byp-list-element"]}>
                Submitted research articles must have appropriate content and
                language for an academic environment, and must not include
                language that promotes hatred or any provocation.
              </li>
              <li className={cfucss["byp-list-element"]}>
                Submitted articles have to fully meet all the criteria listed in
                the "Before Uploading" section.
              </li>
              <li className={cfucss["byp-list-element"]}>
                Prior to submission, the research article must have the consent
                of all the authors/co-authors.
              </li>
              <li className={cfucss["byp-list-element"]}>
                Submitted research articles must be the intellectual property of
                the author(s) and must not be borrowed, copied, plagiarized, or
                contain any materials copyrighted by a third party.
              </li>
              <li className={cfucss["byp-list-element"]}>
                Once an article has been peer-reviewed or specialist-reviewed,
                it will be made public and featured in the "Articles" section of
                InitiaRe, which can be accessed freely by other users of the
                InitiaRe website.
              </li>
              <li className={cfucss["byp-list-element"]}>
                The submitter has to frequently keep track of the Google Docs
                file and the InitiaRe website to identify the submission status
                or suggested revisions from InitiaRe.
              </li>
              <li className={cfucss["byp-list-element"]}>
                The submitter should be open to receiving constructive feedback
                from InitiaRe reviewers and actively revise their article
                accordingly.
              </li>
              <li className={cfucss["byp-list-element"]}>
                The submitter has to respond to emails and messages from
                InitiaRe and stay updated on the latest information regarding
                their article.
              </li>
            </ol>
            <div className={cfucss["byp-last-row"]}>
              <div
                className={`${cfucss["clickable-text-small"]} ${cfucss["byp-cancel-button"]}`}
                onClick={() => {
                  navi(-1);
                }}
              >
                Cancel
              </div>
              <div
                className={`${
                  clicked
                    ? cfucss["being-clicked"]
                    : cfucss["not-being-clicked"]
                } ${cfucss["byp-agree"]}`}
                onClick={() => {
                  handleContinue();
                  handleClick();
                }}
              >
                I agree
              </div>
            </div>
          </div>
        </div>

        <UploadPages
          classStage="second-stage"
          handleBack={handleBack}
          handleClick={handleClick}
          handleContinue={handleContinue}
          clicked={clicked}
          PageComponent={Stage2JSX}
          stage={1}
          handleSubmit={handleSubmit}
        />
        <UploadPages
          classStage="third-stage"
          handleBack={handleBack}
          handleClick={handleClick}
          handleContinue={handleContinue}
          clicked={clicked}
          PageComponent={Stage3JSX}
          stage={2}
          handleSubmit={handleSubmit}
        />
        <UploadPages
          classStage="fourth-stage"
          handleBack={handleBack}
          handleClick={handleClick}
          handleContinue={handleContinue}
          clicked={clicked}
          PageComponent={Stage4JSX}
          stage={3}
          handleSubmit={handleSubmit}
        />
        <UploadPages
          classStage="fifth-stage"
          handleBack={handleBack}
          handleClick={handleClick}
          handleContinue={handleContinue}
          clicked={clicked}
          PageComponent={Stage5JSX}
          stage={4}
          handleSubmit={handleSubmit}
        />
        <UploadPages
          classStage="sixth-stage"
          handleBack={handleBack}
          handleClick={handleClick}
          handleContinue={handleContinue}
          clicked={clicked}
          PageComponent={Stage6JSX}
          stage={5}
          handleSubmit={handleSubmit}
        />

        <div className={`${cfucss["seventh-stage"]} `}>
          <Stage7JSX />
          <div
            className={`${cfucss["back-button"]} ${
              clicked ? cfucss["being-clicked"] : cfucss["not-being-clicked"]
            }`}
            onClick={() => {
              handleBack();
              handleClick();
            }}
          >
            Back
          </div>
        </div>
      </div>
    </div>
  );
}

const UploadPages = ({
  classStage,
  handleBack,
  handleClick,
  handleContinue,
  clicked,
  PageComponent,
  stage,
  handleSubmit,
}) => {
  const [hasSelected, setHasSelected] = useState(false);

  return (
    <div className={`${cfucss[classStage]}`}>
      <PageComponent setHasSelected={setHasSelected} />
      <div className={`${cfucss[`stage-nav`]}`}>
        <p className={`${cfucss[`stage-num`]}`}>Stage {stage} of 5:</p>
        <div className={`${cfucss[`nav-buttons`]}`}>
          <div
            className={`${cfucss["back-button"]} ${
              clicked ? cfucss["being-clicked"] : cfucss["not-being-clicked"]
            }`}
            onClick={() => {
              handleBack();
              handleClick();
            }}
          >
            <p>Back</p>
          </div>
          {stage === 5 ? (
            <div
              className={`${cfucss["continue-button"]} ${
                clicked ? cfucss["being-clicked"] : cfucss["not-being-clicked"]
              } ${hasSelected ? cfucss["next"] : cfucss["block-submit"]} ${
                cfucss["submit-button"]
              } `}
              onClick={() => {
                handleContinue();
                handleClick();
                handleSubmit();
              }}
            >
              <p>Submit</p>
            </div>
          ) : (
            <div
              className={`${cfucss["continue-button"]} ${
                clicked ? cfucss["being-clicked"] : cfucss["not-being-clicked"]
              } ${hasSelected ? cfucss["next"] : cfucss["block-next"]}`}
              onClick={() => {
                handleContinue();
                handleClick();
              }}
            >
              <p>Next</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmUpload;

// sample of continue button
// <div className={`${cfucss['continue-button']} ${clicked ? cfucss['being-clicked'] : cfucss['not-being-clicked']}`}  onClick={() => { handleContinue(); handleClick() }}></div>

// sample of back button
// <div className={`${cfucss['back-button']} ${clicked ? cfucss['being-clicked'] : cfucss['not-being-clicked']}`} onClick={() => { handleBack(); handleClick() }}></div>
