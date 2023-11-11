import { render, screen } from '@testing-library/react';
import Titles from './index';

describe('Titles component', () => {
  it('Render titles with correct text', () => {
    render(<Titles />);
    
    const titleElement = screen.getByText('Where are you located?');
    const subtitleElement = screen.getByText('So we know where to drop off the stuff');
    const subtitleJokeElement = screen.getByText("We won't shere your address with your ex (or whoever)");


    expect(titleElement).toBeDefined();
    expect(subtitleElement).toBeDefined();
    expect(subtitleJokeElement).toBeDefined();
  });
});
