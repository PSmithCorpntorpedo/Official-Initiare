import React from "react";
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
        firstName: yup.string().max(20, "First name must be =< 20 letters").min(2, "First name must be >= 2 letters").required("Required information"),
        lastName: yup.string().max(20, "Last name must be =< 20 letters").min(2, "Last name must be >= 2 letters").required("Required information"),
        email: yup.string().email("Invalid email address").required("Required information")
    }),
    onSubmit: (values) =>{
        console.log(values);
    }
  });
 
  return (
    <div className={styles[`page-wrapper`]}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles[`input-container`]}>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName && <p>{formik.errors.firstName}</p>}
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
           {formik.touched.lastName && formik.errors.lastName && <p>{formik.errors.lastName}</p>}
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
            {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
        <button type="submit">Register Account </button>
        </div>
      </form>
        {/*yeah yeah i know, we can put this into a functional component, but it will mess with formik, and i'm not willing to relinquish cool functionalities for some pretty looking code.
        and also because im lazy as hell to find a solution to make my code look prettier instead of functional ig lol
        */}
    </div>
  );
}
