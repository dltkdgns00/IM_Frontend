import styles from './BizCard.module.css';

const BizCard = ({ info }) =>
{
  return (
    <div className={styles.bizCard}>
      <div className={styles.content}>
        <div>
          <p className={styles.name}>{info.name}</p>
          <p className={styles.company}>{info.company}</p>
        </div>
        <div>
          <p className={styles.phoneNumber}>T. {info.phoneNumber}</p>
          <p className={styles.email}>E. {info.email}</p>
        </div>
        <img className={styles.bizCardLogo} src='svgs/bizCardLogo.svg' alt='bizCardLogo' />
      </div>
    </div >
  );
}

export default BizCard;