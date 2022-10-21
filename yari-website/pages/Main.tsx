import Bio from '../components/Bio';
import styles from '../styles/Main.module.css';

function MainPage({ showMain }) {
  const mainStyle = {
    display: showMain ? undefined : 'none',
    animationPlayState: showMain ? 'running' : 'paused',
  };
  return (
    <div style={mainStyle} id={styles.mainPage}>
      <h1 className={styles.title}> Hello. </h1>
      <h2 className={styles.subTitle}> You&apos;re on the home page. </h2>
      <Bio />
    </div>
  );
}

export default MainPage;
