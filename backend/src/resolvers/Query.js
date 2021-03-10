// import { invoices } from "../db";
import Db from "../db";

Db.init("http://csv-parser:5000");
const invoices = Db.getData();

const getInvoicesOfClient = (db, client) =>
  db.filter((invoice) => invoice.client == client);
const getClients = (db) => [...new Set(db.map((invoice) => invoice.client))];
const calculateTotal = (array) =>
  array.reduce((acc, curr) => acc + parseFloat(curr.net), 0);

const Query = {
  invoices: async () => await invoices,
  invoicesByClient: async (parent, args, context, info) => {
    return getInvoicesOfClient(await invoices, args.client);
  },
  invoicesPerMonth: async (parent, args, context, info) => {
    const allInvoices = await invoices;
    return allInvoices.filter(
      (invoice) => invoice.issueDate.split("/")[0] === args.month
    );
  },
  clients: async () => getClients(await invoices),
  turnoverByClients: async () => {
    let clientsAndTurnovers = [];
    const clients = getClients(await invoices);
    clients.forEach((client) => {
      const turnover = calculateTotal(getInvoicesOfClient(invoices, client));
      clientsAndTurnovers.push({ client: client, sumOfInvoices: turnover });
    });
    return clientsAndTurnovers;
  },
  turnoverByClient: async (parent, args, context, info) => {
    return calculateTotal(getInvoicesOfClient(invoices, args.client));
  },
  turnover: async () => calculateTotal(await invoices),
};

export default Query;
