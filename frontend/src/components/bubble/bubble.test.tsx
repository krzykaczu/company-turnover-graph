import { Bubble } from "./bubble";
import mocks from "./mocks";
const { data, size } = mocks;

describe("Bubble", () => {
  it("renders links", () => {
    const { queryAllByRole } = render(
      <Bubble
        data={data}
        size={size}
        hoveredCustomer=""
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        setHoveredCustomer={() => {}}
      />
    );
  });
});

export {};
