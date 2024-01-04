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
import Stage7ErrorJSX from "./UploadStages/Stage7/Stage7_Error.jsx";

function ConfirmUpload() {
  const navi = useNavigate();
  const [stage, setStage] = useState(1);
  const [isUploading, setIsUploading] = useState(true);
  const [uploadError, setUploadError] = useState(false);

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
    case "Research Report":
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
      "https://production-initiare-f7a455f351a3.herokuapp.com/api/v1/storage/media/upload",
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
          "https://production-initiare-f7a455f351a3.herokuapp.com/api/v1/articles",
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
              content: "Real test 1",
              pre_publish_content: data.res.download_url,
              publish_date: "2023-09-12T14:48:00.000Z",
              short_brief: "brief",
              sub_category_ids: sSubCategory,
              thumbnail: "thumbnail",
              title: "Web Upload",
              type_id: sPaperType,
            }),
          }
        ).then(() => setIsUploading(false));
      })
      .catch((err) => console.log("An error has ocurred" + err))
      .catch(() => {setUploadError(true); setIsUploading(false)});
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
            <div className={cfucss["byp-h1"]}>Trước khi công bố lên InitiaRe</div>
            <div className={cfucss["byp-h2"]}>
            TERMS AND CONDITIONS KHI ĐĂNG KÝ TÀI KHOẢN:
            </div>
            <ol type="1" className={cfucss["byp-list"]}>
            <li className={cfucss["byp-list-element"]}>
              InitiaRe là nền tảng được xây dựng mô phỏng một tạp chí nghiên cứu thực tế. Khi đăng tải nội dung lên InitiaRe, người dùng đồng thuận với việc công khai các sản phẩm của bản thân (Lưu ý: việc công khai không áp dụng cho Proposal và Report)
              </li>
              <li className={cfucss["byp-list-element"]}>
              Người dùng được phép tìm kiếm, xem, lưu, chụp ảnh màn hình, tải về và in các bài nghiên cứu trên trang web.
              </li>
              <li className={cfucss["byp-list-element"]}>
              Người dùng được tự do khai thác thông tin, tự do trao đổi, bình luận về các nội dung trên trang web InitiaRe.
              </li>
              <li className={cfucss["byp-list-element"]}>
              Người dùng được InitiaRe bảo mật thông tin khi đăng ký tài khoản
              </li>
              <li className={cfucss["byp-list-element"]}>
              Người dùng cam kết không cho phép nhiều người cùng sử dụng tài khoản. InitiaRe sẽ không chịu trách nhiệm nếu có bất kì tổn hại về tài khoản gây ra bởi việc nhiều người sử dụng.
              </li>
              <li className={cfucss["byp-list-element"]}>
              Người dùng cam kết không đăng tải lại các bài nghiên cứu đã xuất bản trên trang web InitiaRe
              </li>
              <li className={cfucss["byp-list-element"]}>
              Người dùng cam kết không đăng tải nội dung trong các bài nghiên cứu trên trang web mà không có trích dẫn nguồn gốc của bài tham khảo
              </li>
              <li className={cfucss["byp-list-element"]}>
              Người dùng cam kết không sử dụng các nguồn tài liệu trang web với mục đích truyền thông, thương mại, kinh doanh
              </li>
              <li className={cfucss["byp-list-element"]}>
              Người dùng cam kết không đăng tải bài nghiên cứu thay người khác
              </li>
              <li className={cfucss["byp-list-element"]}>
              Người dùng tự chịu trách nhiệm về năng lực hành vi trong việc đăng ký tài khoản và sử dụng website
              </li>
              <li className={cfucss["byp-list-element"]}>
              Người dùng bắt buộc cung cấp đầy đủ, chính xác thông tin cá nhân khi đăng ký tài khoản ở trang web InitiaRe
              </li>
              <li className={cfucss["byp-list-element"]}>
              Người dùng không được phép sử dụng trang web InitiaRe với mục đích chống lại Nhà nước Cộng hoà xã hội chủ nghĩa Việt Nam; gây phương hại đến an ninh quốc gia, trật tự, an toàn xã hội; phá hoại khối đại đoàn kết toàn dân; tuyên truyền chiến tranh xâm lược, khủng bố; gây hận thù, mâu thuẫn giữa các dân tộc, sắc tộc, chủng tộc, tôn giáo; tuyên truyền, kích động bạo lực, dâm ô, đồi trụy, tội ác, tệ nạn xã hội, mê tín dị đoan, phá hoại thuần phong, mỹ tục của dân tộc
              </li>
              <li className={cfucss["byp-list-element"]}>
              Không được có bất kỳ hành vi nào nhằm đăng nhập trái phép hoặc tìm cách đăng nhập trái phép hoặc gây thiệt hại cho hệ thống máy chủ InitiaRe
              </li>
              <li className={cfucss["byp-list-element"]}>
              Người dùng hiểu rằng InitiaRe chưa được công nhận hoàn toàn là một tạp chí nghiên cứu theo <a href="https://chinhphu.vn/default.aspx?pageid=27160&docid=164963">Luật số 19/2012/QH13 của Quốc hội</a>
              </li>
              <li className={cfucss["byp-list-element"]}>
              Việc nhấn vào ô “Tôi đồng ý với tất cả các điều khoản và điều kiện dành cho user mà InitiaRe đưa ra”, bạn chấp nhận và cam kết tuân theo các điều khoản trên. Mọi hành vi đi ngược với một trong những điều khoản trên đồng nghĩa với việc tài khoản của bạn vĩnh viễn bị xóa khỏi hệ thống InitiaRe
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
          {isUploading ? <Stage7UploadingJSX /> : (uploadError ? <Stage7ErrorJSX /> : <Stage7SuccessJSX />)}
          
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
