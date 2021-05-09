import Head from "next/head";
import { BubbleContainer } from "../components/bubble-container";
import {
  GET_CLIENTS_AND_TURNOVERS,
  GET_ALL_INVOICES,
} from "../utils/gql-queries";
import { initializeApollo } from "../lib/apolloClient";
import { CompAll } from "../components/comp-all";
import { useWindowSize } from "../utils/useWindowSize";

export default function Home() {
  const size = useWindowSize();

  return (
    <div>
      <Head>
        <title>Company turnover</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: "flex", width: "100%" }}>
        <CompAll size={size} />
        <BubbleContainer size={size} />
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_CLIENTS_AND_TURNOVERS,
  });
  await apolloClient.query({
    query: GET_ALL_INVOICES,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}
