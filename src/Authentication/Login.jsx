import React, { useState } from "react";
import styles from "../Authentication/Login.module.css";
import useAuth from "../Hooks/useAuth";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const { setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const PVT = () => {
    var x = document.getElementById('password')
    if (x.type === 'password') {
      x.type = 'text'
    } else {
      x.type = 'password'
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("password", password);
    fetch(
      "https://initiare-clone-a22c10683333.herokuapp.com/api/v1/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const accessToken = data.res?.token;
        const user = data.res?.user;
        setAuth({ email, password, user, accessToken });
        setEmail("");
        setPassword("");
        navigate(from, { replace: true })
      })
      .catch((error) => {
        if (!error?.cause) {
          console.log("No Server Response");
        }
        else {
          console.log("Bro, the server literally died, what did you do??")
        }
      });
  };
  return (
    <div className={styles[`sign-in-wrapper`]}>
      <div className={styles['sign-in-panel']}>
        <div className={styles['big-text-wrap']}>
          <div className={styles['big-text']}>Log in to <span style={{ color: 'var(--secondary)' }}>Initia</span><span style={{ color: 'var(--primary)' }}>Re</span></div>
          <div className={styles['close-icon']} onClick={() => navigate(-1)}><FontAwesomeIcon icon={faTimes} /></div>
        </div>
        <form
          id="login_form"
          onSubmit={handleSubmit}
          className={styles[`login-form`]}
        >
          <div className={styles['email-wrap']}>
            <div className={styles['info-text']}>Email address</div>
            <input
              type="email"
              id="email"
              name="email"
              className={`${styles[`info-box`]} ${styles['email-box']}`}
              placeholder="Enter your email address"
              onChange={handleEmailChange}
            />
          </div>
          <div className={styles['password-wrap']}>
            <div className={styles['info-text-wrap']}>
              <div className={styles['info-text']}>Password</div>
              <div className={styles['show-button']} onClick={PVT}>show</div>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              className={`${styles[`info-box`]} ${styles['password-box']}`}
              placeholder="Enter your password"
              onChange={handlePasswordChange}
            />
          </div>
          {/*'Remember me' and 'Forgot password?' buttons should be here */}
          <div className={styles['submit-wrap']}>
            <button
              type="submit"
              form="login_form"
              className={styles[`submit-button`]}
            >
              Log in
            </button>
          </div>
        </form>
        <div className={styles['register-wrap']}>
          <div className={styles['reg-text']}>Don't have an account?</div>
          <div className={styles['reg-link']}><Link to='/signup'>Register here</Link></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
