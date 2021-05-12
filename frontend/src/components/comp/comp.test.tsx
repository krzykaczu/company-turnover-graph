// import { Comp } from "./comp";
// import mocks from "./mocks";
// const { data } = mocks;

describe("Comp", () => {
  it("renders all client names", () => {
    /* const div = document.createElement("div");
    div.style.cssText = "width:200px;height:200px;";
    const { container } = render(<Comp data={data} />, {
      container: document.body.appendChild(div),
    }); */
    /* const div = document.createElement("div");
    div.style.cssText = "width:200px;height:200px;";
    const { debug } = render(<ResponsiveBar data={data} />, {
      container: document.body.appendChild(div),
    }); */
    // https://github.com/plouc/nivo/blob/92d11b14d186680047ada574faf5880c373863e8/packages/core/src/hooks/useMeasure.js#L4
    // https://github.com/plouc/nivo/blob/92d11b14d186680047ada574faf5880c373863e8/packages/core/src/components/ResponsiveWrapper.js#L13
    // const shouldRender = bounds.width > 0 && bounds.height > 0
    // useMeasure hook and ResizeObserver cause it not to render in node environment
    /* const { debug } = render(
      <div
        style={{
          height: 200,
          width: 200,
        }}
      >
        <Comp data={data} />
      </div>
    );

    debug(); */
    /* data.forEach(({ client }) => {
      console.log(queryByText(client));
      expect(queryByText(client)).toBeInTheDocument();
    }); */
  });
});

export {};
