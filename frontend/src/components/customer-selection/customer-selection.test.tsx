import { CustomerSelection } from "./customer-selection";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { GET_CLIENTS_AND_TURNOVERS } from "../../utils/gql-queries";
import type { TurnoverData } from "../types";

const mocks: MockedResponse<TurnoverData> = {
  request: {
    query: GET_CLIENTS_AND_TURNOVERS,
  },
  result: {
    data: {
      turnoverByClients: [
        {
          client: "BEETROOT SE",
          sumOfInvoices: 28866,
        },
        {
          client: "GREEN",
          sumOfInvoices: 27210,
        },
      ],
    },
  },
};

describe("CustomerSelection", () => {
  it("renders loader in 'loading' state", async () => {
    const { container } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <CustomerSelection />
      </MockedProvider>
    );
    expect(container.querySelector(".center")).toBeInTheDocument();
  });
  it("renders properly in 'success' state", async () => {
    const { queryAllByRole } = render(
      <MockedProvider mocks={[mocks]} addTypename={false}>
        <CustomerSelection />
      </MockedProvider>
    );

    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
    expect(queryAllByRole("link")).toHaveLength(2);
  });
  it("behaves properly in 'error' state", async () => {
    const mocks = [
      {
        request: {
          query: GET_CLIENTS_AND_TURNOVERS,
        },
        error: new Error("An error occurred"),
      },
    ];
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CustomerSelection />
      </MockedProvider>
    );
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));

    expect(getByText("Error! An error occurred")).toBeInTheDocument();
  });
});

export {};
