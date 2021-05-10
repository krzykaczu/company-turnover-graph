import Head from "next/head";

import {
  GET_CLIENTS_AND_TURNOVERS,
  GET_ALL_INVOICES,
} from "../utils/gql-queries";
import { initializeApollo } from "../lib/apolloClient";
import { CustomerSelection } from "../components/customer-selection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Company turnover</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomerSelection />
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
