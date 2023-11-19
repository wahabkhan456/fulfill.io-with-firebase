import Typography from '@mui/material/Typography';
import data from '../../../locale/en.json';
import styles from './styles.module.css';

export default function Heading() {
  return (
    <Typography
      data-testid='title_heading'
      className={styles.heading}
      variant='h4'
      component='h4'
    >
      {data.Heading}
    </Typography>
  );
}
