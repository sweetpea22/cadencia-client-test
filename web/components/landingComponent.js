import styles from "./landing.module.css";
import Navbar from "./partials/Navbar";
import { Button } from "./antd";
import Link from "next/link";

export const Landing = () => {
  return (
    <div style={{ backgroundColor: "#141414" }} className={styles.all}>
      <div
        style={{
          height: "1000px",
        }}
      >
        <Navbar />
        <div
          style={{
            marginTop: "18rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {" "}
          <h1 style={{ fontSize: "43px", color: "#1349E4", fontWeight: "800" }}>
            Turning information into knowledge
          </h1>
          <div style={{ width: "30rem" }}>
            <p style={{ fontSize: "22px" }}>
              Decentralized networks like Filecoin and TheGraph will forever
              change the way we interact with information. We want to make it as
              easier than ever to leverage the power of open data by providing a
              simple interface to search for, compare and upload data.
            </p>
            <Button type="default">
              <Link href="/compare">
                <a>Try it out</a>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
