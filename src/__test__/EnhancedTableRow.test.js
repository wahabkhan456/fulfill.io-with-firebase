import { render } from '@testing-library/react';
import { EnhancedTableRow } from '../components/atoms';

const headData = [
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

const bodyData = {
  albumId: 1,
  id: 1,
  title: 'accusamus beatae ad facilis cum similique qui sunt',
  url: 'https://via.placeholder.com/600/92c952',
  thumbnailUrl: 'https://via.placeholder.com/150/92c952'
};

describe('TableRow TESTING', () => {
  it('Rendered TableHead', () => {
    const { queryByTestId } = render(
      <EnhancedTableRow colAttr={headData} row={bodyData} />
    );
    expect(queryByTestId('Enha_tble_row')).toBeVisible();
  });
});
