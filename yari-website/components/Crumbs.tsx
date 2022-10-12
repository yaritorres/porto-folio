import Breadcrumbs from '@mui/material/Breadcrumbs';
import styles from '../styles/Crumbs.module.css';

function Crumbs() {
  return (
    <div id={styles.crumbContainer}>
      <Breadcrumbs>
        <button className={styles.button} type="button"> 01 </button>
      </Breadcrumbs>
    </div>
  );
}

export default Crumbs;
