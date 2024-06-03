import styles from './Home.module.css';
import CustomCarousel from '../../hooks/CustomCarousel';

const Home = () =>
{
  const bannerItems = [
    {
      src: "/images/bannerCarousel/1.png",
      title: "1",
    },
    {
      src: "/images/bannerCarousel/2.png",
      title: "2",
    },
    {
      src: "/images/bannerCarousel/3.png",
      title: "3",
    }
  ];

  const bannerSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    adaptiveHeight: true,
  };

  const projectItems = [
    {
      src: "/images/projectCarousel/1.png",
      title: "1",
    },
    {
      src: "/images/projectCarousel/2.png",
      title: "2",
    },
    {
      src: "/images/projectCarousel/3.png",
      title: "3",
    }
  ];

  const projectSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    swipeToSlide: true,
    adaptiveHeight: true,
    variableWidth: true,
  };

  const bizCardItems = [
    {
      src: "/images/bizCardCarousel/1.png",
      title: "1",
    },
    {
      src: "/images/bizCardCarousel/2.png",
      title: "2",
    },
  ];

  const bizCardSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    swipeToSlide: true,
    adaptiveHeight: true,
    variableWidth: true,
  };

  return (
    <div className={styles.Home}>
      <CustomCarousel
        items={bannerItems}
        settings={bannerSettings}
      />
      <div className={styles.projectCarousel}>
        <h3>새 프로젝트</h3>
        <CustomCarousel
          items={projectItems}
          settings={projectSettings}
        />
      </div>
      <div className={styles.bizCardCarousel}>
        <h3>최근 업데이트 명함</h3>
        <CustomCarousel
          items={bizCardItems}
          settings={bizCardSettings}
        />
      </div>
    </div>
  );
};

export default Home;