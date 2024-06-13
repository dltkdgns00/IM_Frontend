import React, { useEffect, useState } from 'react';
import styles from "./Wallet.module.css";
import CircularCarousel from "../../components/CircularCarousel";
import { getCookie } from "../../utils/cookies";
import axios from 'axios';
import BizCard from '../../components/BizCard';

const Wallet = () =>
{
  const [items, setItems] = useState([]);
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
            <BizCard key={index} info={item} />
          ));
          setItems(items);
        } else
        {
          setItems([]);
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

  return (
    <div className={styles.wallet}>
      <div className={styles.outerCircle}>
        <div className={styles.innerCircle} />
      </div>
      {items.length > 0 ? (
        <CircularCarousel items={items} />
      ) : (
        <div className={styles.noCard}>
          <p>받은 명함이 없습니다.</p>
        </div>
      )}
    </div>
  );
};

export default Wallet;