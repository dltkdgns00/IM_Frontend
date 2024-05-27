import { useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';
import { useState } from 'react';

const NavBar = () =>
{
  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = useNavigate();

  const handleNavClick = (index) =>
  {
    setActiveIndex(index);
    navigate(index === 0 ? '/' : index === 1 ? '/wallet' : index === 2 ? '/openspace' : '/info');
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navWrapper}>
        <div className={`${styles.navItem} ${activeIndex === 0 ? styles.active : ''}`} onClick={() => handleNavClick(0)}>
          <img src="/svgs/home.svg" className={styles.icon} alt="home" />
          <span>홈</span>
        </div>
        <div className={`${styles.navItem} ${activeIndex === 1 ? styles.active : ''}`} onClick={() => handleNavClick(1)}>
          <img src="/svgs/wallet.svg" className={styles.icon} alt="wallet" />
          <span>명함지갑</span>
        </div>
      </div>

      <div className={styles.centralButton}>
        <img src="/svgs/share.svg" className={styles.icon} alt="share" />
      </div>

      <div className={styles.navWrapper}>
        <div className={`${styles.navItem} ${activeIndex === 2 ? styles.active : ''}`} onClick={() => handleNavClick(2)}>
          <img src="/svgs/openspace.svg" className={styles.icon} alt="openspace" />
          <span>오픈공간</span>
        </div>
        <div className={`${styles.navItem} ${activeIndex === 3 ? styles.active : ''}`} onClick={() => handleNavClick(3)}>
          <img src="/svgs/info.svg" className={styles.icon} alt="info" />
          <span>내 정보</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;