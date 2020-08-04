import React from "react";
import { useFormik } from "formik";
import styles from "./auth.module.css";
import InputField from "./InputField";

const SignupForm = () => {
  // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <div className={styles.pageWrapper}>
        <h1 className={styles.formPageHeader}>Welcome back!</h1>
        <form onSubmit={formik.handleSubmit} className={styles.formWrapper}>
          <label htmlFor="email">Email</label>
          <InputField
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label htmlFor="password">Password</label>
          <InputField
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <InputField
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          <button className={styles.submitButton} type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
