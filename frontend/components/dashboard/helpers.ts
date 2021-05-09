import type { TurnoverData, InvoicesData } from "../types";
import type { CompData } from "../comp";
import type { ProgressData } from "../progress";

export const MONTHS = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
] as const;

export const parseCompData = (
  clientName: string,
  data: TurnoverData
): CompData => {
  const sortedDesc = [...data.turnoverByClients].sort(
    (a, b) => a.sumOfInvoices - b.sumOfInvoices
  );
  const refClient = sortedDesc.find(({ client }) => client === clientName);
  if (!refClient) {
    return [];
  }
  return sortedDesc
    .slice(sortedDesc.indexOf(refClient) - 3, sortedDesc.indexOf(refClient) + 4)
    .map(({ client, sumOfInvoices }) =>
      client === clientName
        ? { client, compared: sumOfInvoices }
        : { client, other: sumOfInvoices }
    );
};

export const parseCompAllData = (data: TurnoverData): CompData => {
  const sortedDesc = [...data.turnoverByClients].sort(
    (a, b) => a.sumOfInvoices - b.sumOfInvoices
  );
  return sortedDesc.map(({ client, sumOfInvoices }) => ({
    client,
    other: sumOfInvoices,
  }));
};

export const parseProgressData = (data: {
  invoicesByClient: InvoicesData;
}): ProgressData[] => {
  return data.invoicesByClient
    .reduce(
      (acc, cur) => {
        const curMonth = MONTHS[Number(cur.issueDate.split("/")[0]) - 1];
        const curMonthData =
          acc[acc.findIndex(({ month }) => month === curMonth)];
        return [
          ...acc.filter(({ month }) => month !== curMonth),
          {
            index: curMonthData.index,
            month: curMonth,
            sumOfInvoices: curMonthData.sumOfInvoices + cur.net,
          },
        ];
      },
      MONTHS.map((month, index) => ({ month, index, sumOfInvoices: 0 }))
    )
    .sort((a, b) => a.index - b.index);
};

export const turnoverByClient = (
  clientName: string,
  data: TurnoverData
): number | undefined => {
  return data.turnoverByClients.find(({ client }) => client === clientName)
    ?.sumOfInvoices;
};

export const getRank = (clientName: string, data: TurnoverData): number => {
  const sorted = [...data.turnoverByClients].sort(
    (a, b) => b.sumOfInvoices - a.sumOfInvoices
  );
  const clientIndex = sorted.findIndex(({ client }) => client === clientName);
  return clientIndex + 1;
};
