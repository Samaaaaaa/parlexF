import React, { useState } from "react";
import styles from "./SignIn.module.css";
import axios from "axios";
import right from "../../../assets/images/right.svg";
import { useFormik } from "formik";
import * as yup from "yup";

const SignIn = () => {
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: ''
  // });

  function submitLogin(values) {
    console.log(values);
  }

  let validationSchema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: submitLogin,
    validateOnMount: true,
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (formData.password !== formData.confirmPassword) {
    //   setMessage('Passwords do not match.');
    //   return;
    // }

    setLoading(true);
    setMessage("");

    try {
      // const payload = {
      //   email: formData.email,
      //   password: formData.password,
      //   role: 'endUser'
      // };

      const response = await axios.post(
        "https://localhost:7181/auth/register",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setMessage("Account created successfully!");
      console.log(response.data);
      // Optionally reset form or redirect here
    } catch (error) {
      console.error(error);
      setMessage(
        error.response?.data?.message ||
          error.message ||
          " Registration failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="container mt-3">
        <div className="row ">
          <div className="col-lg-6 align-content-center vh-100">
            <div className={styles.formSection}>
              <h1 className="fw-bold fs-4 text-left">Welcome back!</h1>
              <p className={`black-80 fw-semibold`}>
                Get Real-Time Expert Advice – No Waiting, Just Answers!
              </p>
              <form onSubmit={formik.handleSubmit}>
                <label className="fw-bold" htmlFor="email">
                  Email <span> *</span>{" "}
                </label>
                <input
                  className={styles.inputt}
                  id="email"
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  // value={formData.email}
                  // onChange={handleChange}
                  placeholder="samaaLeza@gmail.com"
                  required
                />
                {formik.errors.email && formik.touched.email ? (
                  <div className="alert alert-danger mt-2 p-2">
                    {formik.errors.email}
                  </div>
                ) : null}

                <label className="fw-bold" htmlFor="password">
                  Password <span> *</span>{" "}
                </label>
                <input
                  className={styles.inputt}
                  id="password"
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  // value={formData.password}
                  // onChange={handleChange}
                  placeholder="********"
                  required
                />
                {formik.errors.password && formik.touched.password ? (
                  <div className="alert alert-danger mt-2 p-2">
                    {formik.errors.password}
                  </div>
                ) : null}

                <button
                  type="submit"
                  className={`d-block m-auto ${styles.buttonn}
                  ${!(formik.dirty && formik.isValid)?
                    styles.disabledButton : null
                  }
                  `}

                  disabled={loading || !(formik.isValid && formik.dirty)}
                >
                  {loading ? "Creating Account..." : "Create the account"}
                </button>
              </form>

              {message && <p>{message}</p>}

              <p className={`black-80 fw-semibold text-center`}>
                Don't have an account? <a href="#">Sign up</a>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={`${styles.sideSection} vh-100`}>
              <div className={styles.imgWTitle}>
                <img
                  src="/Frame.svg"
                  className={styles.callImage}
                  alt="Barlex Logo"
                />
                <h3 className={`blueText fw-semibold`}>Barlex</h3>
              </div>
              <h3 className={`black-80 fw-bold`}>
                Get Real-Time Expert Advice – No Waiting, Just Answers!
              </h3>
              <ul>
                <li className={`black-80 fw-semibold list-unstyled my-3`}>
                  {" "}
                  <img
                    className={`blueBg rounded-4 p-1`}
                    src={right}
                    alt="right"
                  />{" "}
                  Talk to Your Favorite Expert. No need to wait for appointments
                </li>
                <li className={`black-80 fw-semibold list-unstyled my-3`}>
                  {" "}
                  <img
                    className={`blueBg rounded-4 p-1`}
                    src={right}
                    alt="right"
                  />{" "}
                  100% Confidential & Secure.
                </li>
                <li className={`black-80 fw-semibold list-unstyled my-3`}>
                  {" "}
                  <img
                    className={`blueBg rounded-4 p-1`}
                    src={right}
                    alt="right"
                  />{" "}
                  Personalized Guidance Just for You.
                </li>
                <li className={`black-80 fw-semibold list-unstyled my-3`}>
                  {" "}
                  <img
                    className={`blueBg rounded-4 p-1`}
                    src={right}
                    alt="right"
                  />{" "}
                  Save Time & Get Immediate Answers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

// import React from 'react';
// import './SignUp.css'
// import { useRef, useState, useEffect } from "react";

// const SignUp = () => {
//     return (
//         <div>
//             <h2>Create your free account</h2>
//             <p>Get Real-Time Expert Advice – No Waiting, Just Answers!</p>
//             <div className="">
//                 <label htmlFor="">First Name</label>
//                 <input type="text" name="" id="" />
//                 <label htmlFor="">Last Name</label>
//                 <input type="text" name="" id="" />
//             </div>
//             <label htmlFor="">Email</label>
//             <input type="email" name="" id="" />

//             <label htmlFor="">Password</label>
//             <input type="password" name="" id="" />

//             <label htmlFor="">Confirm Password</label>
//             <input type="password" name="" id="" />

//             <button>Create the account</button>

//             <a href="">Login</a>

//         </div>
//     );
// }
// export default SignUp;
