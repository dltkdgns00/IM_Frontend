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
      <div className={styles.bizCard}>
        <div className={styles.content}>
          <div>
            <p className={styles.name}>{userData.name}</p>
            <p className={styles.company}>{userData.org}</p>
          </div>
          <div className={styles.privacy}>
            <p>T. {userData.phoneNumber}</p>
            <p>E. {userData.email}</p>
          </div>
          <img className={styles.bizCardLogo} src='svgs/bizCardLogo.svg' alt='bizCardLogo' />
        </div>
      </div>
      <img className={styles.infoBanner} src="/images/info/infoBanner.png" alt="infoBanner" />
      <button onClick={handleLogout}>debug.logout</button>
    </div>
  );
}

export default Info;