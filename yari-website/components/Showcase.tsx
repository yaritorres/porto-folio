import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Slideshow from './Slideshow';
import styles from '../styles/Showcase.module.css';

export default function Showcase(props) {
  const showCaseStyle = {
    display: props.showCase ? undefined : 'none',
    animationPlayState: props.showCase ? 'running' : 'paused',
  };
  return (
    <div id={styles.showcaseContainer} style={showCaseStyle}>
      <h1 className={styles.title}>Projects</h1>
      <h2 className={styles.subTitle}> Click One to Find Out More </h2>
      <div id={styles.showcase}>
        <Slideshow />
        <Card>
          <img
            alt="Stańczyk by Jan Matejko"
            id={styles.stanczyk}
            src="/img/Stańczyk.jpeg"
            width="800"
            height="410"
          />
          <CardContent>
            Or enjoy some more art.
            <br />
            <em>Stańczyk </em>
            by Jan Matejko
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
