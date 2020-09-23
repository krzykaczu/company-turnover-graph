export type Props = {
    client: string
}

export interface Data {
    invoicesByClient: Array<{ id: string; issueDate: string; net: number; }>;
};