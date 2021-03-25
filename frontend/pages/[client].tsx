import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import InvoiceTableContainer from "../components/invoice-table-container";
import { useRouter } from "next/router";

function Client() {
  const router = useRouter();
  const { client } = router.query;
  return (
    <div className="App">
      {client && <InvoiceTableContainer client={String(client)} />}
    </div>
  );
}

export default Client;
