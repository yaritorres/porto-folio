import { useState } from 'react';
import styles from '../styles/Bio.module.css';

export default function Bio({ setShowMain, setShowCase }) {
  return (
    <div id={styles.bioContainer}>
      <img alt="Starry Night by Van Gogh" id={styles.starryNight} src="/img/starry-night.JPG" width="800" height="500" />
      <p id={styles.bio}>
        My name is Yari Torres Nicola.
        I graduated from Hack Reactor in October, 2022.
        Ahead are some projects I completed during that time
        as well as other ones I&apos;ve done since.
      </p>
      <div id={styles.arrowContainer}>
        <button
          type="button"
          id={styles.startButton}
          onClick={() => { setShowMain(false); setShowCase(true); }}
        >
          ➤
          <div id={styles.circle} />
        </button>
      </div>
    </div>
  );
}
