import { render, screen, fireEvent } from '@testing-library/react';
import Input from './index';

describe('Input component', () => {
  it('Render input with placeholder', () => {
    render(<Input value="texto" handleInputChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText('Search for a location');
    expect(inputElement).toBeDefined();
  });

  it('Calls handleInputChange when input value changes', () => {
    const mockHandleInputChange = vi.fn();
    render(<Input value="" handleInputChange={mockHandleInputChange} />);
    const inputElement = screen.getByPlaceholderText('Search for a location');
    fireEvent.change(inputElement, { target: { value: 'Nuevo valor' } });
    expect(mockHandleInputChange).toHaveBeenCalledTimes(1);
    
  });
});
