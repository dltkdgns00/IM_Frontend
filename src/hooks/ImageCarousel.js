import Slider from "react-slick";
import styles from './ImageCarousel.module.css';

const ImageCarousel = ({ items, settings }) =>
{
  return (
    <Slider
      {...settings}
    >
      {items.map((item, index) => (
        <div key={index}>
          <img className={styles.img} src={item.src} alt={item.title} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;