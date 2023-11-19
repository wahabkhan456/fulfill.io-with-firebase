import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, TableBody } from '@mui/material';
import { EnhancedTableHead, EnhancedTableRow } from '../../atoms';
import getPhotosAction from '../../../redux/actions/getPhotosAction';

export default function CustomizeTable(props) {
  const { columns } = props;

  // states
  const [selected, setSelected] = useState([]);
  const { photos } = useSelector(state => state.PhotosReducer);

  const dispatch = useDispatch();

  // side Effects
  useEffect(() => {
    dispatch(getPhotosAction(1));
  }, [dispatch]);

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = photos.map((n, index) => index);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = id => selected.indexOf(id) !== -1;

  return (
    <Table>
      <EnhancedTableHead
        headCells={columns}
        numSelected={selected.length}
        onSelectAllClick={handleSelectAllClick}
        rowCount={photos.length}
      />
      <TableBody>
        {photos.map((row, index) => {
          const isItemSelected = isSelected(index);
          const labelId = `enhanced-table-checkbox-${index}`;
          return (
            <EnhancedTableRow
              index={index}
              isItemSelected={isItemSelected}
              labelId={labelId}
              handleClick={handleClick}
              colAttr={columns}
              row={row}
            />
          );
        })}
      </TableBody>
    </Table>
  );
}
