import * as routes from "./routes.json";
const getInvoicesOfClient = (db, client) => {
  return db.filter((invoice) => invoice.client == client);
};
const getClients = (db) => {
  return [...new Set(db.map((invoice) => invoice.client))];
};
const calculateTotal = (array) =>
  array.reduce((acc, curr) => acc + parseFloat(curr.net), 0);

module.exports = {
  definition: `
    type TurnoverByClient {
        client: String!
        sumOfInvoices: Float!
        }
    `,
  query: `
        invoicesByClient(client: String!): [Invoice]
        invoicesPerMonth(month: String!): [Invoice]
        clients: [String!]!
        turnoverByClients: [TurnoverByClient!]!
        turnoverByClient(client: String!): Float!
        turnover: Float!
    `,
  type: {
    TurnoverByClient: {
      _description: "Total turnover by a client",
      client: "Client name",
      sumOfInvoices: "Total value of invoices",
    },
  },
  resolver: {
    Query: {
      invoicesByClient: {
        description: "Returns invoices by a single client",
        resolverOf: "application::invoice.invoice.find",
        resolver: async (obj, options, { context }) => {
          const invoices = await strapi.query("invoice").find();
          const variables = context.params;
          return getInvoicesOfClient(invoices, variables._client);
        },
      },
      invoicesPerMonth: {
        description: "Returns invoices issued in a single month",
        resolverOf: "application::invoice.invoice.find",
        resolver: async (obj, options, { context }) => {
          const invoices = await strapi.query("invoice").find();
          const variables = context.params;
          return invoices.filter(
            (invoice) => invoice.issueDate.split("/")[0] === variables._month
          );
        },
      },
      clients: {
        description: "Returns all clients",
        resolverOf: "application::invoice.invoice.find",
        resolver: async (obj, options, { context }) => {
          const invoices = await strapi.query("invoice").find();
          return getClients(invoices);
        },
      },
      turnoverByClients: {
        description: "Returns all clients and their turnover",
        resolverOf: "application::invoice.invoice.find",
        resolver: async (obj, options, { context }) => {
          const invoices = await strapi.query("invoice").find();
          const clientsAndTurnovers = [];
          const clients = getClients(invoices);
          clients.forEach((client) => {
            const turnover = calculateTotal(
              getInvoicesOfClient(invoices, client)
            );
            clientsAndTurnovers.push({ client, sumOfInvoices: turnover });
          });
          return clientsAndTurnovers;
        },
      },
      turnoverByClient: {
        description: "Returns turnover of a single client",
        resolverOf: "application::invoice.invoice.find",
        resolver: async (obj, options, { context }) => {
          const invoices = await strapi.query("invoice").find();
          const variables = context.params;
          return calculateTotal(
            getInvoicesOfClient(invoices, variables._client)
          );
        },
      },
      turnover: {
        description: "Returns total turnover",
        resolverOf: "application::invoice.invoice.find",
        resolver: async (obj, options, { context }) => {
          const invoices = await strapi.query("invoice").find();
          return calculateTotal(invoices);
        },
      },
    },
  },
};
