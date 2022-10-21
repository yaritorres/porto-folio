import styles from '../styles/Showcase.module.css';

export default function Showcase(props) {
  const showCaseStyle = {
    display: props.showCase ? undefined : 'none',
  };
  return (
    <div id={styles.showcaseContainer} style={showCaseStyle}>
      Hello World.
    </div>
  );
}
