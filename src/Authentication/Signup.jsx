import React, { useState } from "react";
import signupcss from "../Authentication/Signup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const [wrong, setWrong] = useState(false);
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    gender: "",
    school: "",
  });

  // eslint-disable-next-line
  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
      state.email
    );
  const passwordRegex = /[\S\s]+/.test(state.password);
  const navigate = useNavigate();

  const [emailCool, setEmailCool] = useState(true); // whether email is valid
  const [passwordCool, setPasswordCool] = useState(true);
  const [onPanel, setPanel] = useState(1);
  const handleContinue = () => {
    let ek = emailRegex;
    let pk = passwordRegex;
    setEmailCool(ek);
    setPasswordCool(pk);
    if (ek && pk) {
      let k = onPanel;
      setPanel(k + 1);
    }
  };

  const handleBack = () => {
    let k = onPanel;
    setPanel(k - 1);
  };

  const PVT = () => {
    var x = document.getElementById("register-password");
    x.type === "password" ? (x.type = "text") : (x.type = "password");
  };

  const handleChange = (event) => {
    const target = event.currentTarget;
    setState({ ...state, [target.name]: target.value });
    if (!emailCool) {
      setEmailCool(emailRegex);
    }
    if (!passwordCool) {
      setPasswordCool(passwordRegex);
    }
  };
  const [remember, setRemember] = useState(true);
  const handleRememberCheck = () => {
    setRemember(!remember);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      "https://production-initiare-f7a455f351a3.herokuapp.com/api/v1/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          first_name: state.first_name,
          last_name: state.last_name,
          email: state.email,
          password: state.password,
          gender: state.gender,
          school: state.school,
        }),
      }
    )
      .then((response) => response.json())
      .then((info) => {
        if (info.status === 201) {
          window.location.replace("/");
          if (remember) {
            window.localStorage.setItem("email", state.email);
            window.localStorage.setItem("password", state.password);
          }
        } else if (info.status === 400) {
          setWrong(true);
        }
      })
      .catch((error) =>
        console.error("No response from the server" + error.status)
      );
  };

  return (
    <div className={signupcss["page-wrapper"]}>
      <form
        id="register-form"
        onSubmit={handleSubmit}
        className={signupcss["form-wrap"]}
      >
        <div
          className={`${signupcss["first-panel-wrap"]} ${
            onPanel === 1
              ? signupcss["on-first-panel"]
              : signupcss["not-first-panel"]
          }`}
        >
          <div className={`${signupcss["first-panel"]}`}>
            <div className={signupcss["big-text-wrap"]}>
              <div className={signupcss["big-text"]}>Register</div>
              <div
                className={signupcss["close-icon"]}
                onClick={() => navigate(-1)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
            <div
              className={`${signupcss["email-wrap"]} ${signupcss["input-wrap"]}`}
            >
              <div
                className={`${signupcss["info-wrap"]} ${signupcss["email-info-wrap"]}`}
              >
                <div
                  className={`${signupcss["info-text"]} ${signupcss["email-text"]}`}
                >
                  Email address
                </div>
              </div>
              <input
                required
                type="text"
                name="email"
                id="register-email"
                placeholder="Enter your email address"
                className={`${signupcss["email-input"]} ${signupcss["input"]} ${
                  emailCool ? signupcss["cool"] : signupcss["not-cool"]
                } ${wrong && signupcss["wrong-info"]}`}
                onChange={handleChange}
                onClick={()=>setWrong(false)}
              />
            </div>
            <div
              className={`${signupcss["password-wrap"]} ${signupcss["input-wrap"]}`}
            >
              <div
                className={`${signupcss["info-wrap"]} ${signupcss["password-info-wrap"]}`}
              >
                <div
                  className={`${signupcss["info-text"]} ${signupcss["password-text"]}`}
                >
                  Password
                </div>
                <div
                  className={`${signupcss["show-button"]} ${signupcss["clickable-text-small"]}`}
                  onClick={PVT}
                >
                  show
                </div>
              </div>
              <input
                required
                type="password"
                name="password"
                id="register-password"
                placeholder="Enter your password"
                className={`${signupcss["password-input"]} ${
                  signupcss["input"]
                } ${passwordCool ? signupcss["cool"] : signupcss["not-cool"]}`}
                onChange={handleChange}
                onClick={()=>setWrong(false)}
              />
            </div>
            <div
              onClick={handleRememberCheck}
              className={`${signupcss["remember-me-wrap"]}`}
            >
              <div
                className={`${signupcss["remember-me-checkbox"]} ${
                  remember ? signupcss.checked : signupcss.unchecked
                }`}
              >
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              </div>
              <div className={`${signupcss["remember-me-text"]}`}>
                Remember me
              </div>
            </div>
            <div className={signupcss["continue-wrap"]}>
              <div
                className={signupcss["continue-button"]}
                onClick={handleContinue}
              >
                Continue
              </div>
            </div>

            <div className={signupcss["sign-in-wrap"]}>
              <div className={signupcss["sign-in-text"]}>Have an account?</div>
              <Link
                style={{ display: "block" }}
                to="/login"
                className={`${signupcss["sign-in-link"]} ${signupcss["clickable-text-small"]}`}
              >
                Log in here
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`${signupcss["second-panel-wrap"]} ${
            onPanel === 2
              ? signupcss["on-second-panel"]
              : signupcss["not-second-panel"]
          }`}
        >
          <div className={`${signupcss["second-panel"]}`}>
            <div
              className={`${signupcss["big-text-wrap"]} ${signupcss["complete-profile-wrap"]}`}
            >
              <div className={`${signupcss["big-text"]}`}>
                Complete your profile
              </div>
            </div>
            <div
              className={`${signupcss["first-name-wrap"]} ${signupcss["input-wrap"]}`}
            >
              <div
                className={`${signupcss["info-wrap"]} ${signupcss["first-name-info-wrap"]}`}
              >
                <div
                  className={`${signupcss["info-text"]} ${signupcss["first-name-text"]}`}
                >
                  First name
                </div>
              </div>
              <input
                required
                type="text"
                name="first_name"
                id="register-first-name"
                placeholder="Enter your first name"
                className={`${signupcss["first-name-input"]} ${signupcss["input"]}`}
                onChange={handleChange}
                onClick={()=>setWrong(false)}
              />
            </div>
            <div
              className={`${signupcss["last-name-wrap"]} ${signupcss["input-wrap"]}`}
            >
              <div
                className={`${signupcss["info-wrap"]} ${signupcss["last-name-info-wrap"]}`}
              >
                <div
                  className={`${signupcss["info-text"]} ${signupcss["last-name-text"]}`}
                >
                  Last name
                </div>
              </div>
              <input
                required
                type="text"
                name="last_name"
                id="register-last-name"
                placeholder="Enter your last name"
                className={`${signupcss["last-name-input"]} ${signupcss["input"]}`}
                onChange={handleChange}
                onClick={()=>setWrong(false)}
              />
            </div>
            <div
              className={`${signupcss["gender-wrap"]} ${signupcss["input-wrap"]}`}
            >
              <div className={signupcss["info-wrap"]}>
                <div className={signupcss["info-text"]}>Gender</div>
              </div>
              <div className={signupcss["gender-input-wrap"]}>
                <label className={signupcss["gender-input-container"]}>
                  <div
                    className={`${signupcss["gender-checkbox"]} ${
                      state.gender === "Male"
                        ? signupcss.checked
                        : signupcss.unchecked
                    }`}
                  >
                    <span>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  </div>
                  <input
                    className={signupcss["gender-input"]}
                    required
                    type="radio"
                    name="gender"
                    id="register-gender-male"
                    value="Male"
                    onChange={handleChange}
                  />
                  <div className={signupcss["radio-text"]}>Male</div>
                </label>
                <label className={signupcss["gender-input-container"]}>
                  <div
                    className={`${signupcss["gender-checkbox"]} ${
                      state.gender === "Female"
                        ? signupcss.checked
                        : signupcss.unchecked
                    }`}
                  >
                    <span>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  </div>
                  <input
                    className={signupcss["gender-input"]}
                    required
                    type="radio"
                    name="gender"
                    id="register-gender-female"
                    value="Female"
                    onChange={handleChange}
                  />
                  <div className={signupcss["radio-text"]}>Female</div>
                </label>
              </div>
            </div>
            <div className={signupcss["second-panel-buttons-wrap"]}>
              <div
                className={`${signupcss["continue-button"]}`}
                onClick={handleBack}
              >
                Back
              </div>
              <button
                type="submit"
                className={`${signupcss["submit-button"]}`}
                onKeyDown={(event) => {
                  event.preventDefault();
                }}
              >
                Register
              </button>
            </div>
            {wrong && (
              <div className={signupcss['duplicate-message']}>Email already exists!</div>
            )}
            <div className={signupcss["sign-in-wrap"]}>
              <div className={signupcss["sign-in-text"]}>Have an account?</div>
              <Link
                style={{ display: "block" }}
                to="/login"
                className={`${signupcss["sign-in-link"]} ${signupcss["clickable-text-small"]}`}
              >
                Log in here
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
