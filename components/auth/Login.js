import { Formik, Field } from "formik";
import { Button } from "../antd";
import InputField from "./InputField";
import * as Yup from "yup";
import styles from "./auth.module.css";

import Link from "next/link";
export const LoginForm = (props) => {
  const {
    value = "",
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = props;

  return (
    <>
      <div className={styles.pageWrapper}>
        <h1 className={styles.formPageHeader}>Welcome back!</h1>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={async (value) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(value, null, 2));
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required("Required"),
          })}
        >
          <form onSubmit={handleSubmit} className={styles.formWrapper}>
            <label htmlFor="email" style={{ display: "block" }}>
              Email
            </label>
            <Field component={InputField} name="email" />
            {/* {errors.email && touched.email && (
          <div className="input-feedback">{errors.email}</div>
        )} */}

            <label htmlFor="password" style={{ display: "block" }}>
              Password
            </label>
            <Field component={InputField} name="password" type="password" />
            {/* {errors.password && touched.password && (
          <div className="input-feedback">{errors.password}</div>
        )} */}

            <Button
              className={styles.submitButton}
              type="submit"
              disabled={isSubmitting}
            >
              <Link href="/compare">
                <a>Login</a>
              </Link>
            </Button>
          </form>
        </Formik>
      </div>
    </>
  );
};

export default LoginForm;
