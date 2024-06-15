import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BizCard from '../BizCard';
import styles from './EditBizCard.module.css';

const EditBizCard = () =>
{
  const { userId } = useParams();
  const [bizCard, setBizCard] = useState({
    id: '',
    name: '',
    company: '',
    phoneNumber: '',
    email: '',
    description: '',
    color: '#262626'
  });

  const handleBizCard = async () =>
  {
    try
    {
      const response = await axios.get(`https://introme.co.kr/v1/card/${userId}`);
      const data = response.data;

      // color가 null인 경우 기본값 #262626 설정
      setBizCard({
        id: data.id || '',
        name: data.name || '',
        company: data.company || '',
        phoneNumber: data.phoneNumber || '',
        email: data.email || '',
        description: data.description || '',
        color: data.color || '#262626'
      });
    } catch (error)
    {
      console.error("Error fetching business card data:", error);
    }
  }

  const handleChange = (e) =>
  {
    const { name, value } = e.target;
    setBizCard((prevBizCard) => ({
      ...prevBizCard,
      [name]: value,
    }));
  }

  useEffect(() =>
  {
    handleBizCard();
  }, []);

  return (
    <div className={styles.editBizCard}>
      <p className={styles.title}>명함 수정</p>
      <div>
        <BizCard bizCard={bizCard} />
        <div className={styles.container}>
          <input type="text" name="name" placeholder="이름" value={bizCard.name} onChange={handleChange} />
          <input type="text" name="company" placeholder="회사" value={bizCard.company} onChange={handleChange} />
          <input type="text" name="phoneNumber" placeholder="전화번호" value={bizCard.phoneNumber} disabled />
          <input type="text" name="email" placeholder="이메일" value={bizCard.email} disabled />
          <textarea name="description" placeholder="자기소개" value={bizCard.description} onChange={handleChange} />
          <input type="color" name="color" value={bizCard.color} onChange={handleChange} />
          <button>수정</button>
          <button>취소</button>
        </div>
      </div>
    </div>
  );
}

export default EditBizCard;
