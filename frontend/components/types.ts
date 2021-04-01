export type TurnoverByClient = { client: string; sumOfInvoices: number };

export type TurnoverData = {
  turnoverByClients: TurnoverByClient[];
};

export type InvoicesData = Array<{
  id: string;
  issueDate: string;
  net: number;
  client: string;
}>;
