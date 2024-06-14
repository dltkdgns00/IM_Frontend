import BizCard from "../BizCard/BizCard";
import { deleteCookie, getCookie } from "../../utils/cookies";
import styles from './Info.module.css';

const Info = () =>
{
  const memberCookie = getCookie('memberCookie');
  const decodedMemberCookie = decodeURIComponent(memberCookie);
  const userData = JSON.parse(decodedMemberCookie);

  console.log(userData);

  const handleLogout = () =>
  {
    deleteCookie('authToken');
    deleteCookie('memberCookie');
    window.location.href = '/';
  }
  return (
    <div className={styles.info}>
      <div className={styles.infoEdit}>
        <img src="/images/info/person.png" alt="person" />
        <p>{userData.name}</p>
      </div>
      <BizCard info={{ name: userData.name, company: userData.org, phoneNumber: userData.phoneNumber, email: userData.email }} />
      <img className={styles.infoBanner} src="/images/info/infoBanner.png" alt="infoBanner" />
      <button onClick={handleLogout}>debug.logout</button>
    </div>
  );
}

export default Info;