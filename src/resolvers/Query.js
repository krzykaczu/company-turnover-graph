import { invoices } from "../db";

const getInvoicesOfClient = (db, client) => db.filter(invoice => invoice.client == client)
const getClients = db => [...new Set(db.map(invoice => invoice.client))]
const calculateTotal = array => array.reduce((acc,curr) => acc+parseFloat(curr.net), 0)

const Query = {
    invoices: () => invoices,
    invoicesByClient: (parent, args, context, info) => {
        return getInvoicesOfClient(invoices,args.client)
    },
    clients: () => getClients(invoices),
    turnoverByClients: () => {
        let clientsAndTurnovers = []
        const clients = getClients(invoices)
        clients.forEach(client => {
            const turnover = calculateTotal(getInvoicesOfClient(invoices,client))
            clientsAndTurnovers.push({ client: client, sumOfInvoices: turnover})
        })
        return clientsAndTurnovers
    },
    turnoverByClient: (parent, args, context, info) => {
        return calculateTotal(getInvoicesOfClient(invoices,args.client))
    },
    turnover: () => calculateTotal(invoices)
}

export default Query