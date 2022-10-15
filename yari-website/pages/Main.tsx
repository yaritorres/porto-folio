import Bio from '../components/Bio';
import styles from '../styles/Main.module.css';

function MainPage(props) {
  const style = {
    display: props.hidden ? 'none' : undefined,
    animationPlayState: props.hidden ? 'paused' : 'running',
  };
  return (
    <div style={style} id={styles.mainPage}>
      <h1 className={styles.title}> Hello. </h1>
      <h2 className={styles.subTitle}> You&apos;re on the home page. </h2>
      <Bio />
    </div>
  );
}

export default MainPage;
