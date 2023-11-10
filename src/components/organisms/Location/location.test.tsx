import Location from ".";
import { render, screen } from "@testing-library/react";
describe("acordeon", () => {
  test("shoulr", () => {
    render(<Location />);
    expect(screen.getByText("Where are you located?")).toBeDefined()
    expect(screen.getByText("So we know where to drop off the stuff")).toBeDefined();
  });
});
