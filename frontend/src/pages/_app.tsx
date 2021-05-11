import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import type { Component, FunctionComponent } from "react";

const App: FunctionComponent<{
  Component: typeof Component;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: { initialApolloState: any };
}> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};
export default App;
