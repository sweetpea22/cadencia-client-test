import dynamic from "next/dynamic";
import UniswapList, {
  UNISWAP_QUERY,
  uniswapQueryVars,
} from "../components/uniswap";
import { initializeApollo } from "../lib/apolloClient";
import BalancerList, {
  BALANCER_QUERY,
  balancerQueryVars,
} from "../components/balancer";
import Layout from "../components/partials/Layout";
import Navbar from "../components/partials/Navbar";

const BalancerComponentWithNoSSR = dynamic(
  () => import("../components/balancer"),
  { ssr: false }
);

const UniswapComponentWithNoSSR = dynamic(
  () => import("../components/uniswap"),
  { ssr: false }
);

const IndexPage = () => (
  <>
    <Navbar />
    <div>
      <div style={{ display: "flex" }}>
        <UniswapComponentWithNoSSR />
        <BalancerComponentWithNoSSR />
      </div>
    </div>
  </>
);

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: UNISWAP_QUERY,
    variables: uniswapQueryVars,
  });

  await apolloClient.query({
    query: BALANCER_QUERY,
    variables: balancerQueryVars,
    context: {
      dataSrc: "balancer",
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default IndexPage;
