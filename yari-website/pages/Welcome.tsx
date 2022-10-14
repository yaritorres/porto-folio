import { useState, useEffect } from 'react';
import styles from '../styles/Welcome.module.css';

function Welcome(props) {
  const [display, setDisplay] = useState('block');
  const [welcomeDisp, setWelcomeDisp] = useState('');

  useEffect(() => {
    setTimeout(() => { setDisplay('none'); }, 3500);
  }, []);

  const style = {
    display: welcomeDisp,
    animationPlayState: props.hidden ? 'paused' : 'running',
  };

  return (
    <div style={style} id={styles.welcomePage}>
      <div id={styles.welcomeContainer}>
        <h1 className={styles.welcome}> Welcome. </h1>
      </div>
      <div id={styles.startContainer}>
        <button
          type="button"
          id={styles.startButton}
          onClick={() => {
            props.setHidden(false);
            setTimeout(() => { setWelcomeDisp('none'); props.setPlayState('running'); }, 3000);
          }}
        >
          Start
        </button>
        <div id={styles.circle} />
      </div>
      <div id={styles.tileContainer}>
        <div className={styles.tile1} style={{ display }} />
        <div className={styles.tile2} style={{ display }} />
        <div className={styles.tile3} style={{ display }} />
        <div className={styles.tile4} style={{ display }} />
      </div>
    </div>
  );
}

export default Welcome;
