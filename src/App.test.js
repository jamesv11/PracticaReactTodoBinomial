import { render, screen } from '@testing-library/react';
import App from './App';


describe("APP", () => {
  test('renders title HELLO WORLD', () => {
    render(<App />);
    const h1Element = screen.getByText(/HELLO WORLD/i);
    expect(h1Element).toBeInTheDocument();
  });
})


