import { useMemo } from "react";
import fetch from "cross-fetch";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { endpoint } from "../utils/endpoint";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    ssrMode: typeof window === "undefined", // set to true for SSR
    link: new HttpLink({
      uri: endpoint,
      fetch,
    }),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialState: any = null
): ReturnType<typeof createApolloClient> {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(
  // eslint-disable-next-line
  initialState: any
): ReturnType<typeof initializeApollo> {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
