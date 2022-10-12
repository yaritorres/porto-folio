import styles from '../styles/Welcome.module.css'

function Welcome() {

  return (
    <div>
      <div id={styles.welcomeContainer}>
        <h1 className={styles.welcome}> Welcome. </h1>
        <div id={styles.welcomeCircle}></div>
      </div>
      <div id={styles.startContainer}>
        <button id={styles.startButton}>
              Start
        </button>
        <div id={styles.circle}></div>
      </div>
    </div>
  );
}

export default Welcome;