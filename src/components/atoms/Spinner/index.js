import CircularProgress from '@mui/material/CircularProgress';
import stles from './styles.module.css';
export default function CircularUnderLoad() {
  return (
    <div data-testid='spinner' className={stles.loadingStyles}>
      <CircularProgress disableShrink />
    </div>
  );
}
