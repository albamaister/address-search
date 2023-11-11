import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./index";

describe("Button", () => {
  it("Render button with correct text", () => {
    render(<Button onClick={() => {}}>UNDERSTOOD</Button>);
    const button = screen.getByText("UNDERSTOOD");
    expect(button).toBeDefined();
  });

  it("Should call onClick when clicked", () => {
    const mockOnClick = vi.fn();
    render(<Button onClick={mockOnClick}>UNDERSTOOD</Button>);

    const button = screen.getByText("UNDERSTOOD");
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
