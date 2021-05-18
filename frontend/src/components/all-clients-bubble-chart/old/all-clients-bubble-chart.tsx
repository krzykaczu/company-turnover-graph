import React from "react";
import * as enzyme from "enzyme";
import toJson from "enzyme-to-json";
import { MockedProvider } from "react-apollo/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import wait from "waait";

import BubbleContainer from "../all-clients-bubble-chart";
import MockComponent from "../../../test-utils/mock-component";
import { GET_CLIENTS_AND_TURNOVERS } from "../../../gql_queries";

jest.mock(
  "../../bubble",
  () => require("../../../test-utils/mock-component").default
);

const mocks = [
  {
    request: {
      query: GET_CLIENTS_AND_TURNOVERS,
    },
    result: {
      data: {
        turnoverByClients: [
          {
            client: "BEETROOT SE",
            sumOfInvoices: 14674,
          },
          {
            client: "GREEN",
            sumOfInvoices: 8007,
          },
        ],
      },
    },
  },
];

test("BubbleContainer snapshot matches", () => {
  const bubbleContainer = enzyme.shallow(<BubbleContainer />);
  expect(toJson(bubbleContainer)).toMatchSnapshot();
});

test("BubbleContainer acquires graphQl data without error", async () => {
  const graphQlWrapper = enzyme.mount(
    <Router>
      <MockedProvider mocks={mocks} addTypename={false}>
        <BubbleContainer />
      </MockedProvider>
    </Router>
  );

  await wait(0);

  expect(
    graphQlWrapper.update().find(MockComponent).prop("data")
  ).toMatchObject([
    {
      label: "BEETROOT SE",
      r: 121.13628688382354,
      value: 14674,
      x: 0,
      y: 0,
    },
    {
      label: "GREEN",
      r: 89.48184173339304,
      value: 8007,
      x: 0,
      y: 0,
    },
  ]);
});
