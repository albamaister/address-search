import { render, screen, fireEvent } from "@testing-library/react";
import SectionSearch from "./index";

describe("SectionSearch component", () => {
  it("should render the input field", () => {
    render(<SectionSearch />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();
  });
});
