import React from "react";
import { Input } from "../antd";
import styles from "./auth.module.css";

const InputField = ({ ...props }) => {
  return <Input className={styles.formInput} {...props} />;
};

export default InputField;
