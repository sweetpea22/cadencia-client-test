import { PageHeader, Tabs, Button, Statistic, Descriptions } from 'antd';
import Link from "next/link"

const { TabPane } = Tabs;


const extraContent = (
  <div
    style={{
      display: 'flex',
      width: 'max-content',
      justifyContent: 'flex-end',
    }}
  >
  </div>
);

const Content = ({ children, extra }) => {
  return (
    <div className="content">
      <div className="main">{children}</div>
      <div className="extra">{extra}</div>
    </div>
  );
};

export const Navbar = () => {

  return (
    <>
      <PageHeader
        className="site-page-header-responsive"
        title="Cadence"
        extra={[
          <Button disabled key="3">Network Stats</Button>,
          <Button key="2" >
            <Link href="/map">
              <a>Map View</a>
            </Link>
          </Button>,
        ]}
      >
      </PageHeader>
    </>
  )

}

export default Navbar;