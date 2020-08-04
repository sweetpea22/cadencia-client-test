import { Table } from "../antd";
import { Menu, Dropdown, Input } from "../antd";
import { DownOutlined } from "@ant-design/icons";
import styles from "./StoragePowerTable.module.css";

export const StoragePowerTable = (props) => {
  const storagePowerData = props;

  const { Search } = Input;

  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          Africa
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.google.com/"
        >
          Asia
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.google.com/"
        >
          Europe
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.google.com/"
        >
          North America
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.google.com/"
        >
          Oceania
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.google.com/"
        >
          South America
        </a>
      </Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "Miner Id",
      dataIndex: "minerId",
    },
    {
      title: "Raw Byte Storage Capacity",
      dataIndex: "rbsc",
    },
    {
      title: "Sector Quality",
      dataIndex: "sectorQuality",
    },
    {
      title: "Deal Success Rate",
      dataIndex: "dealSuccessRate",
    },
  ];

  const tableData = [
    {
      minerId: "t03984 - Genius Rig",
      rbsc: "313.22TB",
      sectorQuality: "43%",
      dealSuccessRate: "90%",
    },
    {
      minerId: "t0333",
      rbsc: "50TB",
      sectorQuality: "12%",
      dealSuccessRate: "4%",
    },
    {
      minerId: "t03984 - wethemboyz",
      rbsc: "313.22TB",
      sectorQuality: "43%",
      dealSuccessRate: "90%",
    },
    {
      minerId: "t03984 - hellokitty",
      rbsc: "313.22TB",
      sectorQuality: "43%",
      dealSuccessRate: "90%",
    },
    {
      minerId: "t03984 ",
      rbsc: "313.22TB",
      sectorQuality: "43%",
      dealSuccessRate: "90%",
    },
    {
      minerId: "t03984 - apfelwein",
      rbsc: "313.22TB",
      sectorQuality: "43%",
      dealSuccessRate: "90%",
    },
  ];

  return (
    <>
      <div className={styles.tableWrapper}>
        <div className={styles.HeadingWrapper}>
          <h1>
            Storage Power in{" "}
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                North America <DownOutlined />
              </a>
            </Dropdown>
          </h1>
          <div className={styles.tagline}>
            <h5>
              Share of Network: <span>17%</span>
            </h5>
            {/* <Search size="small" className={styles.search}placeholder="Search by Miner Id, Country" style={{ width: 300 }}/>  */}
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={tableData}
          pagination={true}
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
};

export default StoragePowerTable;
