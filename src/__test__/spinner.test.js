import { render, screen } from '@testing-library/react';
import { Spinner } from '../components/atoms';

describe('SPINNER TESTING', () => {
  test('Render spinner', () => {
    render(<Spinner />);
    const LoadingElement = screen.getAllByTestId('spinner');
    expect(LoadingElement).toBeTruthy();
  });
});
