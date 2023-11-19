import { TableHead, TableRow, TableCell, Checkbox } from "@mui/material";
import styles from "./styles.module.css";

export default function EnhancedTableHead({
  headCells,
  onSelectAllClick,
  numSelected,
  rowCount,
}) {
  return (
    <TableHead data-testid='Enha_tble_head' className={styles.tableHead}>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell, index) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            style={headCell.width ? { minWidth: headCell.width } : {}}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
