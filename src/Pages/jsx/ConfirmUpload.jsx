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
import Stage7UploadingJSX from "./UploadStages/Stage7/Stage7_Uploading.jsx";
import Stage7SuccessJSX from "./UploadStages/Stage7/Stage7_Success.jsx";

function ConfirmUpload() {
  const navi = useNavigate();
  const [stage, setStage] = useState(1);
  const [isUploading, setIsUploading] = useState(true);

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
      sCategory = 1;
      break;
    case "Physical Sciences":
      sCategory = 2;
      break;
    case "Earth Sciences":
      sCategory = 3;
      break;
    case "Medical and Health":
      sCategory = 4;
      break;
    case "Mathematics":
      sCategory = 5;
      break;
    case "Formal Sciences":
      sCategory = 6;
      break;
    case "Social Studies":
      sCategory = 7;
      break;
    case "Economics":
      sCategory = 8;
      break;
    case "Psychology":
      sCategory = 9;
      break;
    case "Education":
      sCategory = 10;
      break;
    case "Culture and Arts":
      sCategory = 23;
      break;
    default:
      sCategory = 0;
  }

  let sSubCategory = "";
  for (let i = 0; i < subCategory.length; i++) {
    let temp = "";
    let current = sSubCategory;
    switch (subCategory[i]) {
      case "Life Sciences":
        temp = "1";
        break;
      case "Physical Sciences":
        temp = "2";
        break;
      case "Earth Sciences":
        temp = "3";
        break;
      case "Medical and Health":
        temp = "4";
        break;
      case "Mathematics":
        temp = "5";
        break;
      case "Formal Sciences":
        temp = "6";
        break;
      case "Social Studies":
        temp = "7";
        break;
      case "Economics":
        temp = "8";
        break;
      case "Psychology":
        temp = "9";
        break;
      case "Education":
        temp = "10";
        break;
      case "Culture and Arts":
        temp = "23";
        break;
      default:
        temp = "0";
    }
    if (sSubCategory === "") {
      sSubCategory = temp;
    } else {
      sSubCategory = current.concat(",", temp);
    }
  }

  let sPaperType;
  switch (paperType) {
    case "Research Paper":
      sPaperType = 1;
      break;
    case "Review Paper":
      sPaperType = 2;
      break;
    case "Research Proposal":
      sPaperType = 3;
      break;
    case "Scientific Poster":
      sPaperType = 4;
      break;
    case "Literature Review":
      sPaperType = 5;
      break;
    default:
      sPaperType = -1;
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

            headers: {
              Authorization: "Bearer " + auth.accessToken,
              "Content-Type": "application/json",
              accept: "application/json",
            },
            body: JSON.stringify({
              category_id: sCategory,
              content: file.name,
              pre_publish_content: data.res.download_url,
              publish_date: "2023-09-12T14:48:00.000Z",
              short_brief: "brief",
              sub_category_ids: sSubCategory,
              thumbnail: "thumbnail",
              title: "Review board chooses name later",
              type_id: sPaperType,
            }),
          }
        ).then(() => setIsUploading(false));
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
          {isUploading ? <Stage7UploadingJSX /> : <Stage7SuccessJSX />}
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
