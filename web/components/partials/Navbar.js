import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
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
          <h4 className={styles.title}>Cadencia</h4>
          <Link href="/compare">
            <a>Compare Data</a>
          </Link>
          <span className={styles.divider}></span>
          <Link href="/filecoin-dashboard">
            <a>Filecoin Data Network Stats</a>
          </Link>
          <span className={styles.divider}></span>

          <Avatar
            className={styles.avatar}
            size="large"
            icon={<UserOutlined />}
          />
          {onFilecoinPage ? (
            <>
              <Button disabled={onMapPage ? false : true} key="3">
                <Link href="/">
                  <a>Network Stats</a>
                </Link>
              </Button>
              ,
              <Button disabled={onMapPage} key="2">
                <Link href="/map">
                  <a>Map View</a>
                </Link>
              </Button>
            </>
          ) : null}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
