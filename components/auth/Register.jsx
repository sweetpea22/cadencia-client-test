import React from "react";
import { useFormik } from "formik";
import styles from "./auth.module.css";
import InputField from "./InputField";

import { gql, useMutation } from "@apollo/client";

const REGISTER_USER = gql`
  mutation Register($data: RegisterInput!) {
    Register(data: $data) {
      id
      email
    }
  }
`;

const SignupForm = () => {
  const [register, { data }] = useMutation(REGISTER_USER);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (data) => {
      const response = await register({
        variables: {
          data: {
            email: formik.values.email,
            password: formik.values.password,
            confirmPassword: formik.values.confirmPassword,
          },
        },
      });
      console.log(response);
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

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.mutation({
    mutation: REGISTER_USER,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default SignupForm;
