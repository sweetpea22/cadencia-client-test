import { gql, useQuery } from "@apollo/client";
import { initializeApollo } from "../lib/apolloClient";

export const HELLO_QUERY = gql`
  query {
    hello
  }
`;

export default () => {
  const { data } = useQuery(HELLO_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  return <h1>Query Response: {data.hello}</h1>;
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: HELLO_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
