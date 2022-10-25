import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Slideshow.module.css';

export default function Slideshow(props) {
  const showCaseStyle = {
    display: props.showCase ? undefined : 'none',
    animationPlayState: props.showCase ? 'running' : 'paused',
  };
  return (
    <Carousel id={styles.carousel}>
      <Carousel.Item>
        <img
          className={styles.carouselItem}
          src="/img/starry-night.JPG"
          alt="First slide"
          height="500"
          width="800"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
