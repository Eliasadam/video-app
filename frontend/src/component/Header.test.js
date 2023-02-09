import { render, screen } from '@testing-library/react';
import Header from './Header';

test('it should render the title that is passed to it', () => {
  render(<Header title ="Video Recommendation"/>);
  const headerElement = screen.getByText(/video recommendation/i);
  expect(headerElement).toBeInTheDocument();
});

test('it should render the title that is passed to it', () => {
    render(<Header title ="Video Recommendation" />);
    const headerElement = screen.getByRole("heading");
    expect(headerElement).toBeInTheDocument();
  });

  test('it should render the title that is passed to it', () => {
    render(<Header title ="Video Recommendation" />);
    const headerElement = screen.getByTestId("header")
    expect(headerElement).toBeInTheDocument();
  });
