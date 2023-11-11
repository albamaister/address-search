import Location from ".";
import { render, screen } from "@testing-library/react";
describe("Location component", () => {
  test("renders location component with titles and section search", () => {
    render(<Location />);

    const titlesElement = screen.getByText('Where are you located?');
    const sectionSearchElement = screen.getByPlaceholderText('Search for a location');

    expect(titlesElement).toBeDefined();
    expect(sectionSearchElement).toBeDefined();
  });
});
