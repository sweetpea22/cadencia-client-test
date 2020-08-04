import "../styles/global.css";
// import { ApolloProvider } from "@apollo/client";
// import { useApollo } from "../lib/apolloClient";

export default function App({ Component, pageProps }) {


  return (
    // <ApolloProvider client={apolloClient}></ApolloProvider>
    <Component {...pageProps} />
    // </ApolloProvider>
  );
}
