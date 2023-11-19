import { TableCell, TableRow, Checkbox } from '@mui/material';
import styles from './styles.module.css';

export default function EnhancedTableRow({
  index,
  isItemSelected,
  labelId,
  handleClick,
  colAttr,
  row
}) {
  return (
    <TableRow
      data-testid='Enha_tble_row'
      hover
      onClick={event => handleClick(event, index)}
      role='checkbox'
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={index}
      selected={isItemSelected}
    >
      <TableCell padding='checkbox'>
        <Checkbox
          color='primary'
          checked={isItemSelected}
          inputProps={{
            'aria-labelledby': labelId
          }}
        />
      </TableCell>
      <TableCell align={colAttr[0].numeric ? 'right' : 'left'}>
        <img
          className={styles.productImage}
          src={row.thumbnailUrl}
          alt={index}
        />
      </TableCell>
      <TableCell align={colAttr[1].numeric ? 'right' : 'left'}>
        {row.title}
      </TableCell>
      <TableCell align={colAttr[2].numeric ? 'right' : 'left'}>
        {row.albumId}
      </TableCell>
    </TableRow>
  );
}
