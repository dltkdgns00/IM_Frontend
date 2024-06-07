import styles from './HeaderBar.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderBar = () =>
{
  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = useNavigate();

  const handleNavClick = (index) =>
  {
    setActiveIndex(index);
    navigate(index === 0 ? '/community/openspace' : '/community/teamspace');
  };
  return (
    <div className={styles.HeaderBar}>
      <div className={`${styles.OpenSpace} ${activeIndex === 0 ? styles.active : ''}`} onClick={() => handleNavClick(0)}>
        <div>
          <img className={styles.img} src="/svgs/openspace.svg" alt="openspace" />
        </div>
        <div>
          <p>오픈스페이스</p>
        </div>
      </div>
      <div className={`${styles.TeamSpace} ${activeIndex === 1 ? styles.active : ''}`} onClick={() => handleNavClick(1)}>
        <div>
          <img className={styles.img} src="/svgs/teamspace.svg" alt="teamspace" />
        </div>
        <div>
          <p>팀스페이스</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;