import React from "react";
import { useState } from "react";
import styles from "./signUp.module.css";
import { useFormik } from "formik";
import * as yup from "yup";

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      password: "",
      school: "",
    },

    validationSchema: yup.object({
      firstName: yup
        .string()
        .max(20, "First name must be =< 20 letters")
        .min(2, "First name must be >= 2 letters")
        .required("Required information"),
      lastName: yup
        .string()
        .max(20, "Last name must be =< 20 letters")
        .min(2, "Last name must be >= 2 letters")
        .required("Required information"),
      email: yup
        .string()
        .email("Invalid email address")
        .required("Required information"),
      password: yup
        .string()
        .min(3, "Password must be >= 3 letters")
        .max(20, "Password must be =< 20 letters")
        .required("Required information"),
      school: yup.string().min(3, "Your school must have >= 3 letters"),
    }),
    onSubmit: async (values) => {
      fetch(
        "https://initiare-clone-a22c10683333.herokuapp.com/api/v1/auth/register",
        {
          method: "POST",
          header: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      ).then((response) => console.log(response.json()));
    },
  });
  const handleRadioButtons = (e) => (formik.values.gender = e.target.value);

  return (
    <div className={styles[`page-wrapper`]}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles[`input-container`]}>
          <input
            className={styles[`info-area`]}
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <p>{formik.errors.firstName}</p>
          )}
          <input
            className={styles[`info-area`]}
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <p>{formik.errors.lastName}</p>
          )}
          <input
            className={styles[`info-area`]}
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p>{formik.errors.email}</p>
          )}
          <input
            className={styles[`info-area`]}
            id="password"
            name="password"
            type="text"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <p>{formik.errors.password}</p>
          )}
          <input
            className={styles[`info-area`]}
            id="school"
            name="school"
            type="text"
            placeholder="School"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.school}
          />
          {formik.touched.school && formik.errors.school && (
            <p>{formik.errors.school}</p>
          )}
          <div className={styles[`gender`]}>
            <label htmlFor="male" className={styles[`radio`]}>
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                onChange={(e) => handleRadioButtons(e)}
                required
              />
              Male
            </label>

            <label htmlFor="female" className={styles[`radio`]}>
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                onChange={(e) => handleRadioButtons(e)}
                required
              />
              Female
            </label>
          </div>
          <button type="submit">Register Account </button>
        </div>
      </form>
      {/*yeah yeah i know, we can put this into a functional component, but it will mess with formik, and i'm not willing to relinquish cool functionalities for some pretty looking code.
        and also because im lazy as hell to find a solution to make my code look prettier instead of functional ig lol
        */}
    </div>
  );
}
