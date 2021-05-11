// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
// import InvoiceTableContainer from "../components/invoice-table-container";
import { Dashboard } from "../components/dashboard";
import { useRouter } from "next/router";
import type { FunctionComponent } from "react";

const Client: FunctionComponent = () => {
  const router = useRouter();
  const { client } = router.query;
  return (
    <div className="App">
      {/* {client && <InvoiceTableContainer client={String(client)} />} */}
      {client && <Dashboard client={String(client)} />}
    </div>
  );
};

export default Client;
