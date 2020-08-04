import { Formik } from "formik";
import * as Yup from "yup";

export const LoginForm = (props) => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required("Required"),
      })}
    >
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" style={{ display: "block" }}>
          Email
        </label>
        <input
          id="email"
          placeholder="Enter your email"
          type="text"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.email && touched.email ? "text-input error" : "text-input"
          }
        />
        {errors.email && touched.email && (
          <div className="input-feedback">{errors.email}</div>
        )}

        <button type="submit" disabled={isSubmitting}>
          Login
        </button>
      </form>
      <LoginInputs />
    </Formik>
  );
};

export default LoginForm;
