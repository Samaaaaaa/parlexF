import React, { useState } from "react";
import styles from "./SignUp.module.css";
import axios from "axios";
import right from "../../../assets/images/right.svg";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom"; 

const SignUp = () => {
  // مش هستخدمه عشان formik عندها state خاصة بيها اللي هي use formik

  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  const [error, setError] = useState(null);
  let navigate = useNavigate();
  
  async function submitRegister(values) {
    const response = await axios.post(
        "https://localhost:7181/auth/register",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  //  let {data} = axios.post("http://localhost:5288/auth/register", values).catch((err)=>setError(err.response.data.message))
  //  if(data.message === 'success')
  //   {
  //     navigate('/src/components/Atorney/SignIn/SignIn.jsx')
  //   }
  //  console.log(data)
    // console.log(values);
  }

  let validationSchema = yup.object({
    firstName: yup
      .string()
      .min(3, "Minimum length is 3, please enter valid name")
      .max(10, "Maximum length is 10")
      .required("First name is required"),
    lastName: yup
      .string()
      .min(3, "Minimum length is 3, please enter valid name")
      .max(10, "Maximum length is 10")
      .required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"), //email methed here has built in regex woowww
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Enter strong password"
      )
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], " Passwords must match")
      .required("Password confirmation is required"),
  });

  let formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema, // الفااريبل اللي عرفته فوق وعملت فيه الفاليديشن
    onSubmit: submitRegister,
    validateOnMount: true,
  });

  //    لإظهار لودينج ومسج بعد الإرسال.
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  //  هستبدله ب  handleChange جاهزة في formik

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //  هستبدله ب yup validation

    // if (formData.password !== formData.confirmPassword) {
    //   setMessage("Passwords do not match.");
    //   return;
    // }

    setLoading(true);
    setMessage("");

    try {
      // const payload = {
      //   firstName: formData.firstName,
      //   lastName: formData.lastName,
      //   email: formData.email,
      //   password: formData.password,
      //   role: "endUser",
      // };

      // هيفضل زي ما هو جوه onSubmit

      // const response = await axios.post(
      //   "https://localhost:7181/auth/register",
      //   payload,
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );

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
      <div className="container">
        {error !== null? <div className="alert alert-danger mt-2 p-2">  {error} </div> : null}
        <div className="row vh-100">
          <div className="col-lg-6 align-content-center">
            <div className={styles.formSection}>
              <h2 className="fw-bold">
                Create <span className="blueText"> your </span> free account
              </h2>
              <p className={`fw-semibold black-80`}>
                Get Real-Time Expert Advice – No Waiting, Just Answers!
              </p>
              <form
                // onSubmit={handleSubmit}
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <label className="fw-bold d-block" htmlFor="firstName">
                    First Name <span className={styles.spann}> *</span>{" "}
                  </label>
                  <input
                    className={styles.inputt}
                    id="firstName"
                    type="text"
                    name="firstName" //linked with formik initial values in useFormik and so on for other inputs
                    // value={formData.firstName}
                    value={formik.values.firstName}
                    // onChange={handleChange}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} // عشان اعرف  حد دخل وخرج من الانبوت ولا لا
                    placeholder="Samaa"
                    required
                  />
                  {formik.errors.firstName && formik.touched.firstName ? (
                    <div className="alert alert-danger mt-2 p-2">
                      {formik.errors.firstName}
                    </div>
                  ) : null}

                  <label className="fw-bold d-block" htmlFor="lastName">
                    Last Name <span className={styles.spann}> *</span>{" "}
                  </label>
                  <input
                    className={styles.inputt}
                    id="lastName"
                    type="text"
                    name="lastName"
                    // value={formData.lastName}
                    value={formik.values.lastName}
                    // onChange={handleChange}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} // عشان اعرف  حد دخل وخرج من الانبوت ولا لا
                    placeholder="Leza"
                  />
                  {formik.errors.lastName && formik.touched.lastName ? (
                    <div className="alert alert-danger mt-2 p-2">
                      {formik.errors.lastName}
                    </div>
                  ) : null}
                </div>

                <label className="fw-bold d-block" htmlFor="email">
                  Email <span className={styles.spann}> *</span>{" "}
                </label>
                <input
                  className={styles.inputt}
                  id="email"
                  type="email"
                  name="email"
                  // value={formData.email}
                  value={formik.values.email}
                  // onChange={handleChange}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} // عشان اعرف  حد دخل وخرج من الانبوت ولا لا
                  placeholder="samaaLeza@gmail.com"
                />
                {formik.errors.email && formik.touched.email ? (
                  <div className="alert alert-danger mt-2 p-2">
                    {formik.errors.email}
                  </div>
                ) : null}

                <label className="fw-bold d-block" htmlFor="password">
                  Password <span className={styles.spann}> *</span>{" "}
                </label>
                <input
                  className={styles.inputt}
                  id="password"
                  type="password"
                  name="password"
                  // value={formData.password}
                  value={formik.values.password}
                  // onChange={handleChange}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} // عشان اعرف  حد دخل وخرج من الانبوت ولا لا
                  placeholder="********"
                />
                {formik.errors.password && formik.touched.password ? (
                  <div className="alert alert-danger mt-2 p-2">
                    {formik.errors.password}
                  </div>
                ) : null}

                <label className="fw-bold d-block" htmlFor="confirmPassword">
                  Confirm Password <span> *</span>{" "}
                </label>
                <input
                  className={styles.inputt}
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  // value={formData.confirmPassword}
                  value={formik.values.confirmPassword}
                  // onChange={handleChange}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} // عشان اعرف  حد دخل وخرج من الانبوت ولا لا
                  placeholder="********"
                />
                {formik.errors.confirmPassword &&
                formik.touched.confirmPassword ? (
                  <div className="alert alert-danger mt-2 p-2">
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}

                {/* <button
                type="submit"
                className={`d-block m-auto ${styles.buttonn}`}
                // disabled={loading}
                disabled={!(formik.dirty && formik.isValid)}
              >
                {loading ? "Creating Account..." : "Create the account"}
              </button> */}
                <button
                  type="submit"
                  className={`d-block m-auto ${styles.buttonn}
                  ${!(formik.dirty && formik.isValid)? styles.disabledButton: null }
                  `}
                  disabled={loading || !(formik.dirty && formik.isValid)}
                >
                  {loading ? "Creating Account..." : "Create the account"}
                  
                </button>
                {!(formik.dirty && formik.isValid) && <div className="text-center text-muted small mt-2">
                   Fill all required fields to enable the button.
                </div>}
                
              </form>
                    {/* {console.log("Dirty:", formik.dirty)}
                    {console.log("Valid:", formik.isValid)}
                    {console.log("Errors:", formik.errors)} */}
              {message && <p>{message}</p>}

              <p className={`black-50 fw-semibold text-center`}>
                You already have an account? <a href="#">Sign in</a>
              </p>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className={styles.sideSection}>
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
                <li className={`black-80 fw-semibold d-flex my-3`}>
                  {" "}
                  <img
                    className={` blueBg rounded-4 p-1 me-2`}
                    src={right}
                    alt="right"
                  />{" "}
                  Talk to Your Favorite Expert. No need to wait for appointments
                </li>
                <li className={`black-80 fw-semibold d-flex my-3`}>
                  {" "}
                  <img
                    className={`rounded-4 p-1 me-2 blueBg`}
                    src={right}
                    alt="right"
                  />{" "}
                  100% Confidential & Secure.
                </li>
                <li className={`black-80 fw-semibold d-flex my-3`}>
                  {" "}
                  <img
                    className={`rounded-4 p-1 me-2 blueBg`}
                    src={right}
                    alt="right"
                  />{" "}
                  Personalized Guidance Just for You.
                </li>
                <li className={`black-80 fw-semibold d-flex my-3`}>
                  {" "}
                  <img
                    className={`rounded-4 p-1 me-2 blueBg`}
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

export default SignUp;
