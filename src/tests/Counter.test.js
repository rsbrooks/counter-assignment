import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component
  render(<Counter/>);
})

test('renders counter message', () => {
  // Confirm 'Counter' header/message is present
  const counterMessage = screen.getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Confirm initial count has a value of 0
  expect(screen.getByTestId('count').textContent).toBe("0");
});

test('clicking + increments the count', () => {
  // Confirm that clicking '+' button increments count
  const origCountValue = screen.getByTestId('count').textContent;
  const incrementedCountValue = Number(origCountValue) + 1;
  
  fireEvent.click(screen.getByRole('button', {name: '+'}));

  const newCountValue = screen.getByTestId('count').textContent;
  expect(newCountValue).toEqual(String(incrementedCountValue));
});

test('clicking - decrements the count', () => {
  // Confirm that clicking '-' button decrements count
  const origCountValue = screen.getByTestId('count').textContent;
  const decrementedCountValue = Number(origCountValue) - 1;
  
  fireEvent.click(screen.getByRole('button', {name: '-'}));

  const newCountValue = screen.getByTestId('count').textContent;
  expect(newCountValue).toEqual(String(decrementedCountValue));
});
