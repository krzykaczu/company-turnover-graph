import { Card } from "./card";

describe("Card", () => {
  it("adds a css class", () => {
    const className = "test";
    const { container } = render(
      <Card className={className}>
        <div />
      </Card>
    );
    expect(container.firstChild).toHaveClass(className);
  });
});

export {};
