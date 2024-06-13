import styles from './Home.module.css';
import CustomCarousel from '../../hooks/CustomCarousel';
import BizCard from '../../hooks/BizCard';

import { React, useEffect, useState } from 'react';
import { getCookie } from '../../utils/cookies';
import axios from 'axios';

const Home = () =>
{
  const bannerItems = [
    <img className={styles.img} src="/images/bannerCarousel/1.png" alt="1" />,
    <img className={styles.img} src="/images/bannerCarousel/2.png" alt="2" />,
    <img className={styles.img} src="/images/bannerCarousel/3.png" alt="3" />
  ];

  const bannerSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    adaptiveHeight: true,
    arrows: false,
  };

  const projectItems = [
    <img className={styles.img} src="/images/projectCarousel/1.png" alt="1" />,
    <img className={styles.img} src="/images/projectCarousel/2.png" alt="2" />,
    <img className={styles.img} src="/images/projectCarousel/3.png" alt="3" />
  ];

  const projectSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    swipeToSlide: true,
    adaptiveHeight: true,
    variableWidth: true,
    arrows: false,
  };

  const [bizCardItems, setItems] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() =>
  {
    const fetchData = async () =>
    {
      try
      {
        const memberCookie = getCookie('memberCookie');
        const decodedMemberCookie = decodeURIComponent(memberCookie);
        const userData = JSON.parse(decodedMemberCookie);

        const userId = userData.id;
        const response = await axios.get('https://introme.co.kr/v1/card/shared-cards/' + userId);
        const data = response.data;

        if (data.length !== 0)
        {
          const items = data.map((item, index) => (
            <div style={{ marginRight: "20px" }}>
              <BizCard key={index} info={item} />
            </div>
          ));
          setItems(items);
        } else
        {
          setItems([<div>받은 명함이 없습니다.</div>]);
        }
      } catch (error)
      {
        console.error('카드 정보를 불러오는 중 오류 발생', error);
      } finally
      {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
  {
    return <div>로딩 중...</div>;
  }

  const bizCardSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    swipeToSlide: true,
    adaptiveHeight: true,
    variableWidth: true,
    arrows: false,
  };

  return (
    <div className={styles.Home}>
      <CustomCarousel
        items={bannerItems}
        settings={bannerSettings}
      />
      <div className={styles.bizCardCarousel}>
        <h3>최근 업데이트 명함</h3>
        <CustomCarousel
          items={bizCardItems}
          settings={bizCardSettings}
        />
      </div>
      <div className={styles.projectCarousel}>
        <h3>팀 스페이스</h3>
        <CustomCarousel
          items={projectItems}
          settings={projectSettings}
        />
      </div>
    </div>
  );
};

export default Home;