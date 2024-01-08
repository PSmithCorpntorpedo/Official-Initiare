import React, { useState } from "react";
import logincss from "../Authentication/Login.module.css";
import useAuth from "../Hooks/useAuth";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const { setAuth } = useAuth();
  const [wrong, setWrong] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"

  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const [remember, setRemember] = useState(true)

  const handleChange = event => {
    const target = event.currentTarget
    setState({
      ...state,
      [target.name]: target.type === 'checkbox'
        ? (!state[target.name])
        : target.value
    })
  }

  const handleRememberCheck = () => {
    setRemember(!remember)
  }

  const PVT = () => {
    var x = document.getElementById('login-password')
    x.type === 'password'
      ? x.type = 'text'
      : x.type = 'password'
  }

  const handleSubmit = (e) => {
    e.preventDefault(); //fuck using enter to submit
    fetch(
      "https://production-initiare-f7a455f351a3.herokuapp.com/api/v1/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          email: state.email,
          password: state.password,
        }),
      }
    )
      .then((response) => response.json()) 
      .then((data) => {
        if(data.status === 401){
          console.log("Invalid email or password")
          setWrong(true);
        }
        else if(data.status === 500) console.log("No server response"); 
        else {
          if (remember) {
            window.localStorage.setItem("email", state.email);
            window.localStorage.setItem("password", state.password);
          }
          const accessToken = data.res?.token;
          const user = data.res?.user;
          const em = state.email;
          const pw = state.password
          setAuth({ em, pw, user, accessToken });
          setState({
            email: '',
            password: ''
          })
          navigate(from, { replace: true })}
      })
      .catch((err) => {
        if (!err?.cause) {
          console.log("");
        }
        else {
          console.log(err.cause)
        }
      })
  };
  return (
    <div className={logincss[`sign-in-wrapper`]}>
      <div className={logincss['sign-in-panel']}>
        <div className={logincss['big-text-wrap']}>
          <div className={logincss['big-text']}>Log in to <span style={{ color: 'var(--secondary)' }}>Initia</span><span style={{ color: 'var(--primary)' }}>Re</span></div>
          <div className={logincss['close-icon']} onClick={() => navigate(-1)}><FontAwesomeIcon icon={faTimes} /></div>
        </div>
        <form
          id="login_form"
          onSubmit={handleSubmit}
          className={logincss[`login-form`]}
        >
          <div className={logincss['email-wrap']}>
            <div className={logincss['info-text-wrap']}>
              <div className={logincss['info-text']}>Email address</div>
            </div>
            <input
              required
              type="email"
              id="login-email"
              name="email"
              className={`${logincss[`info-box`]} ${logincss['email-box']} ${wrong === true ? logincss['wrong-info'] : logincss['right-info']}`}
              placeholder="Enter your email address"
              onChange={handleChange}
              onClick={()=> setWrong(false)}
            />
          </div>
          <div className={logincss['password-wrap']}>
            <div className={logincss['info-text-wrap']}>
              <div className={logincss['info-text']}>Password</div>
              <div className={logincss['show-button']} onClick={PVT}>show</div>
            </div>
            <input
              required
              type="password"
              id="login-password"
              name="password"
              className={`${logincss[`info-box`]} ${logincss['password-box']} ${wrong ? logincss['wrong-info'] : null}`}
              placeholder="Enter your password"
              onChange={handleChange}
              onClick={()=> setWrong(false)}
              />
          </div>
          <div className={`${logincss['memory-foam']}`}>
            <div onClick={handleRememberCheck} className={`${logincss['remember-me-wrap']}`}>
              <div  className={`${logincss['remember-me-checkbox']} ${remember ? logincss.checked : logincss.unchecked}`}>
                <span><FontAwesomeIcon icon={faCheck} /></span>
              </div>
              <div className={`${logincss['remember-me-text']}`}>Remember me</div>
            </div>
            <div className={`${logincss['forgot']} ${logincss['clickable-text-small']}`}>Forgot password?</div>              
          </div>
          <div className={logincss['submit-wrap']}>
            <button
              type="submit"
              form="login_form"
              className={logincss[`submit-button`]}
            >
              Log in
            </button>
          </div>
          {wrong && (
              <div className={logincss['wrong-message']}>Wrong email or password!</div>
            )}   
        </form>
        <div className={logincss['register-wrap']}>
          <div className={logincss['reg-text']}>Don't have an account?</div>
          <div className={logincss['reg-link']}><Link to='/signup'>Register here</Link></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
