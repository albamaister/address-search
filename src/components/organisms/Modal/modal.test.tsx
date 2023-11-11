import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./index";

describe("Modal component", () => {
  it("Render modal with correct content when zip is valid", () => {
    render(<Modal closeModal={() => {}} isZipValid={true} />);

    const titleElement = screen.getByText("Address updated");
    const subtitleElement = screen.getByText(
      "New address added to your account"
    );
    const secSubtitleElement = screen.getByText(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque neque laboriosam sequi possimus temporibus ullam? Eius soluta voluptatibus minima ea a, earum, ab illum quo, aspernatur deserunt sunt laboriosam quae."
    );
    const endSubtitleElement = screen.getByText(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    );
    const buttonElement = screen.getByText("UNDERSTOOD");

    expect(titleElement).toBeDefined();
    expect(subtitleElement).toBeDefined();
    expect(secSubtitleElement).toBeDefined();
    expect(endSubtitleElement).toBeDefined();
    expect(buttonElement).toBeDefined();
  });

  it("Render modal with correct content when zip is not valid", () => {
    render(<Modal closeModal={() => {}} isZipValid={false} />);

    const titleElement = screen.getByText("Out of Delivery Area");
    const subtitleElement = screen.getByText('"Wherever I go, there I am"');
    const secSubtitleElement = screen.getByText(
      "Sadly, this quote is not true for us. In other words, we are not operating in your area (yet), but things change everithing."
    );
    const endSubtitleElement = screen.getByText(
      "Sign up to our newsletter to get notified."
    );
    const buttonElement = screen.getByText("UNDERSTOOD");

    expect(titleElement).toBeDefined();
    expect(subtitleElement).toBeDefined();
    expect(secSubtitleElement).toBeDefined();
    expect(endSubtitleElement).toBeDefined();
    expect(buttonElement).toBeDefined();
  });

  it('Call closeModal when "UNDERSTOOD" button is clicked', () => {
    const mockCloseModal = vi.fn();
    render(<Modal closeModal={mockCloseModal} isZipValid={true} />);

    const buttonElement = screen.getByText("UNDERSTOOD");
    fireEvent.click(buttonElement);

    expect(mockCloseModal).toHaveBeenCalledTimes(1);
  });
});
