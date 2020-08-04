import { PageHeader, Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  const onMapPage = router.pathname === "/map";
  return (
    <>
      <PageHeader
        className="site-page-header-responsive"
        title="Cadence"
        extra={[
          <Button disabled={onMapPage ? false : true} key="3">
            <Link href="/">
              <a>Network Stats</a>
            </Link>
          </Button>,
          <Button disabled={onMapPage} key="2">
            <Link href="/map">
              <a>Map View</a>
            </Link>
          </Button>,
        ]}
      ></PageHeader>
    </>
  );
};

export default Navbar;
