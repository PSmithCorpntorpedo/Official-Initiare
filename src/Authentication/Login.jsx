import React, { useState } from "react";
import styles from "../Authentication/Login.module.css";
import useAuth from "../Hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";


function Login() {
  const { setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from  = location.state?.from?.pathname || "/"

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

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
        navigate(from, {replace: true})
      })
      .catch((error) => {
        if(!error?.cause){
          console.log("No Server Response");
        }
        else{
          console.log("Bro, the server literally died, what did you do??")
        }
      });
  };
  return (
    <div className={styles[`sign-up-wrapper`]}>
      <form
        id="register_form"
        onSubmit={handleSubmit}
        className={styles[`register-form`]}
      >
        <div className={styles[`form-header`]}></div>
        <input
          type="email"
          id="email"
          name="email"
          className={styles[`info-box`]}
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <input
          type="password"
          id="password"
          name="password"
          className={styles[`info-box`]}
          placeholder="Password"
          onChange={handlePasswordChange}
        />

        <button
          type="submit"
          form="register_form"
          className={styles[`submit-button`]}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
