import { gql, useQuery, NetworkStatus } from "@apollo/client";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Treemap,
} from "recharts";

export const BALANCER_QUERY = gql`
  query {
    pools(first: 10, orderBy: swapsCount, orderDirection: desc) {
      id
      totalWeight
      tokens {
        id
        name
        symbol
        balance
      }
    }
  }
`;

export const balancerQueryVars = {
  first: 10,
};

export default function BalancerList() {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    BALANCER_QUERY,
    {
      variables: balancerQueryVars,
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true,
      context: { dataSrc: "balancer" },
    }
  );

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore;

  const loadMorePosts = () => {
    fetchMore({
      variables: {
        skip: pools.length,
      },
    });
  };

  if (error) return <p> Error</p>;
  if (loading && !loadingMorePosts) return <div>Loading</div>;

  const { pools } = data;
  let poolsList = pools.map((pool, index) => {
    let tokens = pool.tokens;
    return (
      <div key={index}>
        <h1>Pool {index}</h1>
        {tokens.map((token) => (
          <p key={token.id}>{token.name}</p>
        ))}
      </div>
    );
  });

  // const renderAreaChart = (
  //   <AreaChart width={850} height={600} data={pools}>
  //     <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
  //     <YAxis domain={["10000000", "dataMax"]} dataKey="poolsCount" />
  //     <XAxis domain={["dataMin", "dataMax"]} />
  //     <Area
  //       type="monotone"
  //       dataKey="poolsCount"
  //       stroke="#9A00D7"
  //       fill="#CF86FA"
  //       strokeWidth={2}
  //     />
  //     <Tooltip />
  //   </AreaChart>
  // );

  const renderTreemap = (
    <Treemap
      width={400}
      height={400}
      data={pools}
      dataKey="Token"
      ratio={4 / 3}
      stroke="#fff"
      fill="#8884d8"
    />
  );

  return (
    <section>
      <h1>What the biggest Balancer Pools are holding</h1>
      <>{poolsList}</>
    </section>
  );
}

// <li key={index}>
//   Token Name: <strong>{token.name}</strong> Total Trade Volume:{" "}
//   {token.totalTradeVolume}
// </li>;
