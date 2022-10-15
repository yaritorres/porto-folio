import styles from '../styles/Bio.module.css';

export default function Bio() {
  return (
    <div id={styles.bioContainer}>
      <img alt="Yari Torres Nicola." id={styles.yari} src="/img/yari.jpg" width="800" height="500" />
      <p id={styles.bio}>
        My name is Yari Torres Nicola.
        I graduated from Hack Reactor in October, 2022.
        Below are some projects I completed during that time
        as well as other ones I&apos;ve done since.
      </p>
    </div>
  );
}
