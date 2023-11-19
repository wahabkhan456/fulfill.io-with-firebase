import { render } from '@testing-library/react';
import { Heading } from '../components/atoms';

describe('HEADING COMPONENT TESTING', () => {
  it('Rendered heading', () => {
    const { queryByTestId } = render(<Heading />);
    expect(queryByTestId('title_heading')).toBeVisible();
  });

  it('Have correct input', () => {
    const { getByTestId } = render(<Heading />);
    const heading = getByTestId('title_heading');
    const actualValue = 'Acme Inc. developers';
    expect(heading.innerHTML).toBe(actualValue);
  });
});
