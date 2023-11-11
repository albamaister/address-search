import { render, screen, fireEvent } from '@testing-library/react';
import { IPlace } from '../../../interfaces/place';
import Place from './index';

const mockOnClickPlace = vi.fn();

const mockSuggestion: IPlace = {
  description: 'New york',
  zipCode: '122222'
};

describe('Place component', () => {
  it('Render place with correct description', () => {
    render(<Place onClickPlace={mockOnClickPlace} suggestion={mockSuggestion} />);
    const descriptionElement = screen.getByText('New york');
    expect(descriptionElement).toBeDefined();
  });

  it('Call onClickPlace when place is clicked', () => {
    render(<Place onClickPlace={mockOnClickPlace} suggestion={mockSuggestion} />);
    const placeElement = screen.getByText('New york');
    fireEvent.click(placeElement);
    expect(mockOnClickPlace).toHaveBeenCalledTimes(1);
    expect(mockOnClickPlace).toHaveBeenCalledWith(mockSuggestion);
  });

});
