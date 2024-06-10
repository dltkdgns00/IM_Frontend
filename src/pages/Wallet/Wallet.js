import React, { useEffect, useState } from 'react';
import styles from "./Wallet.module.css";
import CircularCarousel from "../../hooks/CircularCarousel";
import { getCookie } from "../../utils/cookies";
import axios from 'axios';

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
            <div key={index} className={styles.bizCard}>
              <div className={styles.content}>
                <div>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.company}>{item.company}</p>
                </div>
                <div className={styles.privacy}>
                  <p>T. {item.phoneNumber}</p>
                  <p>E. {item.email}</p>
                </div>
                <img className={styles.bizCardLogo} src='svgs/bizCardLogo.svg' alt='bizCardLogo' />
              </div>
            </div>
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