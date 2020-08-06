import InputField from "../components/auth/InputField";
import { Button } from "../components/antd";
import Link from "next/link";
import Navbar from "../components/partials/Navbar";

export default () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 style={{ textAlign: "center", marginTop: "5rem" }}>
          Upload A Dataset
        </h1>
        <form
          style={{
            marginTop: "4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label htmlFor="name">Dataset Name</label>
          <InputField id="name" name="name" type="text" />
          <br></br>
          <br></br>
          <label htmlFor="File">File Upload</label>
          <InputField id="File" name="File" type="file" />
          <br></br>
          <br></br>
          <label htmlFor="tags">Tags (separate by commas)</label>
          <InputField id="tags" name="tags" type="text" />
          <br></br>
          <br></br>
          <br></br>
          <Button type="primary">
            <Link href="/compare">
              <a>All done!</a>
            </Link>
          </Button>
        </form>
      </div>
    </>
  );
};
