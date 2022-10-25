import { useSlotProps } from '@mui/base';
import Bio from '../components/Bio';
import styles from '../styles/Main.module.css';

function MainPage({ showMain, setShowCase, setShowMain }) {
  const mainStyle = {
    display: showMain ? undefined : 'none',
    animationPlayState: showMain ? 'running' : 'paused',
  };
  return (
    <div style={mainStyle} id={styles.mainPage}>
      <h1 className={styles.title}> Hello. </h1>
      <h2 className={styles.subTitle}> You&apos;re on the home page. </h2>
      <Bio setShowMain={setShowMain} setShowCase={setShowCase} />
    </div>
  );
}

export default MainPage;
