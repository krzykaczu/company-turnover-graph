// import { invoices } from "../db";
import Db from "../db";
import { endpoint } from "../config";

Db.init(endpoint);
const invoices = Db.getData();

const getInvoicesOfClient = (db, client) => {
  return db.filter((invoice) => invoice.client == client);
};
const getClients = (db) => {
  return [...new Set(db.map((invoice) => invoice.client))];
};
const calculateTotal = (array) =>
  array.reduce((acc, curr) => acc + parseFloat(curr.net), 0);

const Query = {
  invoices: async () => await invoices,
  invoicesByClient: async (parent, args, context, info) => {
    const allInvoices = await invoices;
    return getInvoicesOfClient(allInvoices, args.client);
  },
  invoicesPerMonth: async (parent, args, context, info) => {
    const allInvoices = await invoices;
    return allInvoices.filter(
      (invoice) => invoice.issueDate.split("/")[0] === args.month
    );
  },
  clients: async () => {
    const allInvoices = await invoices;
    return getClients(allInvoices);
  },
  turnoverByClients: async () => {
    let clientsAndTurnovers = [];
    const allInvoices = await invoices;
    const clients = getClients(allInvoices);
    clients.forEach((client) => {
      const turnover = calculateTotal(getInvoicesOfClient(allInvoices, client));
      clientsAndTurnovers.push({ client: client, sumOfInvoices: turnover });
    });
    return clientsAndTurnovers;
  },
  turnoverByClient: async (parent, args, context, info) => {
    const allInvoices = await invoices;
    return calculateTotal(getInvoicesOfClient(allInvoices, args.client));
  },
  turnover: async () => {
    const allInvoices = await invoices;
    return calculateTotal(allInvoices);
  },
};

export default Query;
