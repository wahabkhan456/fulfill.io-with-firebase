import { render } from '@testing-library/react';
import { EnhancedTableHead } from '../components/atoms';

const dummyData = [
  {
    id: 'picture',
    numeric: false,
    label: 'Product',
    width: '3rem'
  },
  {
    id: 'title',
    numeric: false,
    label: 'Title'
  },
  {
    id: 'albumId',
    numeric: true,
    label: 'Album Id'
  }
];

describe('TableHead TESTING', () => {
  it('Rendered TableHead', () => {
    const { queryByTestId } = render(
      <EnhancedTableHead headCells={dummyData} />
    );
    expect(queryByTestId('Enha_tble_head')).toBeVisible();
  });
});
