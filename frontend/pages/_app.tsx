import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import React from "react";

export default function App({
  Component,
  pageProps,
}: {
  Component: typeof React.Component;
  pageProps: { initialApolloState: any };
}) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
