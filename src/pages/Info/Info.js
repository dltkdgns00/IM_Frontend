import BizCard from "../BizCard/BizCard";
import { deleteCookie, getCookie } from "../../utils/cookies";
import styles from './Info.module.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Info = () =>
{
  const [bizCard, setBizCard] = useState(null);
  const navigate = useNavigate();

  const memberCookie = getCookie('memberCookie');
  const decodedMemberCookie = decodeURIComponent(memberCookie);
  const userData = JSON.parse(decodedMemberCookie);

  const handleBizCard = async () =>
  {
    try
    {
      const response = await axios.get(`https://introme.co.kr/v1/card/${userData.id}`);
      setBizCard(response.data);
    } catch (error)
    {
      console.error("Error fetching business card data:", error);
    }
  }

  const handleLogout = () =>
  {
    deleteCookie('authToken');
    deleteCookie('memberCookie');
    navigate('/signin');
  }

  useEffect(() =>
  {
    handleBizCard();
  }, []);

  if (!bizCard)
  {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.info}>
      <div className={styles.infoEdit}>
        <img src="/images/info/person.png" alt="person" />
        <p>{userData.name}</p>
      </div>
      <BizCard
        bizCard={{ id: bizCard.id, name: bizCard.name, company: bizCard.company, phoneNumber: bizCard.phoneNumber, email: bizCard.email, color: bizCard.color }}
        isNavigate={true}
        isEdit={true}
      />
      <img className={styles.infoBanner} src="/images/info/infoBanner.png" alt="infoBanner" />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Info;
