import Navbar from "../components/Navbar";
import StoragePowerTable from "../components/StoragePowerTable";
import StoragePowerTiles from "../components/StoragePowerTiles";
import NetCapArea from "../components/graphs/NetCapArea";
import TotalStoredArea from "../components/graphs/TotalStoredArea";
import DealTiles from "../components/DealTiles";
import StorageDistPie from "../components/graphs/StorageDistPie";
import { initializeApollo } from "../lib/apolloClient";
import { ALL_POSTS_QUERY, allPostsQueryVars } from "../components/Posts";

export const Home = (props) => {
  return (
    <>
      <Navbar />
      <main className="main">
        <div className="columnWrapper">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "2rem",
              width: "650px",
              marginTop: "4rem",
            }}
          >
            <NetCapArea />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
                marginLeft: "2rem",
              }}
            >
              <DealTiles />
              <StorageDistPie />
            </div>
            <TotalStoredArea />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "46%",
            marginLeft: "9rem",
          }}
        >
          <StoragePowerTable />
          <StoragePowerTiles />
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: allPostsQueryVars,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default Home;
