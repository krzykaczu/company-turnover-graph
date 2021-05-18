import { ClientRanksBubbleChart } from "./client-ranks-bubble-chart";
import mocks from "./mocks";
const { data, size } = mocks;

describe("ClientRanksBubbleChart", () => {
  it("renders links", () => {
    const { queryAllByRole } = render(
      <ClientRanksBubbleChart
        data={data}
        size={size}
        hoveredCustomer=""
        setHoveredCustomer={() => ""}
      />
    );
    expect(queryAllByRole("link")).toHaveLength(2);
  });
});

export {};
