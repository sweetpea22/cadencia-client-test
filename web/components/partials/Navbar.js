import { Avatar, Button } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

export const Navbar = ({ onFilecoinPage }) => {
  const router = useRouter();
  const onMapPage = router.pathname === "/map";

  return (
    <>
      <nav className={styles.navWrapper}>
        <div className={styles.linkWrapper}>
          <Link href="/compare">
            <a>Browse Datasets</a>
          </Link>
          <span className={styles.divider}></span>
          <Link href="/filecoin-dashboard">
            <a>Search on Filecoin</a>
          </Link>
          <span className={styles.divider}></span>

          <Link href="/filecoin-dashboard">
            <a>Filecoin Data Network Stats</a>
          </Link>
          <span className={styles.divider}></span>

          {onFilecoinPage ? (
            <div className={styles.fcButtonWrapper}>
              <Button disabled={onMapPage ? false : true} key="3">
                <Link href="/">
                  <a>Network Stats</a>
                </Link>
              </Button>
              <Button disabled={onMapPage} key="2">
                <Link href="/map">
                  <a>Map View</a>
                </Link>
              </Button>
            </div>
          ) : null}
          {!onFilecoinPage ? (
            <>
              <Avatar
                className={styles.avatar}
                size="large"
                icon={<UserOutlined />}
                style={{ position: "absolute", right: "5%" }}
              ></Avatar>
              <DownOutlined
                style={{
                  marginTop: ".7rem",
                  marginLeft: ".3rem",
                  color: "darkgray",
                  position: "absolute",
                  right: "3.5%",
                }}
              />
            </>
          ) : null}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
