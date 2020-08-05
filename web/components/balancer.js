import { gql, useQuery, NetworkStatus } from "@apollo/client";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export const BALANCER_QUERY = gql`
  query {
    tokens {
      name
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
      context: { dataSrc: "kyber" },
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

  const { tokens } = data;

  // const renderAreaChart = (
  //   <AreaChart width={850} height={600} data={tokens}>
  //     <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
  //     <YAxis domain={["10000000", "dataMax"]} dataKey="tokensCount" />
  //     <XAxis domain={["dataMin", "dataMax"]} />
  //     <Area
  //       type="monotone"
  //       dataKey="tokensCount"
  //       stroke="#9A00D7"
  //       fill="#CF86FA"
  //       strokeWidth={2}
  //     />
  //     <Tooltip />
  //   </AreaChart>
  // );

  return (
    <section>
      <h1>Kyber tokens</h1>
      <ol>
        {tokens.map((token, index) => (
          <li key={index}> {token.name}</li>
        ))}
      </ol>
    </section>
  );
}

// <li key={index}>
//   Token Name: <strong>{token.name}</strong> Total Trade Volume:{" "}
//   {token.totalTradeVolume}
// </li>;
