import Head from "next/head";
import BubbleContainer from "../components/bubble-container";
import { GET_CLIENTS_AND_TURNOVERS } from "../utils/gql-queries";
import { initializeApollo } from "../lib/apolloClient";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BubbleContainer />
    </div>
  );
}
export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_CLIENTS_AND_TURNOVERS,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}
