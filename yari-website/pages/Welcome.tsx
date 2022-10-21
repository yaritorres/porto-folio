import { useState, useEffect } from 'react';
import styles from '../styles/Welcome.module.css';

function Welcome(props) {
  const [tileDisplay, setTileDisplay] = useState('block');
  const [welcomeDisp, setWelcomeDisp] = useState('');

  useEffect(() => {
    setTimeout(() => { setTileDisplay('none'); }, 3500);
  }, []);

  const style = {
    display: welcomeDisp,
    animationPlayState: props.showWelcome ? 'paused' : 'running',
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
            props.setShowWelcome(false);
            props.setShowMain(true);
            setTimeout(() => { setWelcomeDisp('none'); }, 3000);
          }}
        >
          Start
        </button>
        <div id={styles.circle} />
      </div>
      <div id={styles.tileContainer}>
        <div className={styles.tile1} style={{ display: tileDisplay }} />
        <div className={styles.tile2} style={{ display: tileDisplay }} />
        <div className={styles.tile3} style={{ display: tileDisplay }} />
        <div className={styles.tile4} style={{ display: tileDisplay }} />
      </div>
    </div>
  );
}

export default Welcome;
