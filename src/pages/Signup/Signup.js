import styles from './Signup.module.css';

import { useNavigate } from 'react-router-dom';

const Signup = () =>
{
  const navigate = useNavigate();

  return (
    <div className={styles.signup}>
      <div className={styles.header}>
        <a href="/" onClick={navigate('/')}><img src='svgs/backArrow.svg' alt='backArrow' /></a>
        <p>회원가입</p>
      </div>
      <div className={styles.intro}>
        <p>자신의 이력과 프로필을</p>
        <p>효율적으로 공유해보세요.</p>
      </div>
      <div className={styles.signupForm}>
        <input placeholder='이름' type='text' />
        <input placeholder='생년월일' type='text' />
        <input placeholder='이메일' type='text' />
        <input placeholder='비밀번호' type='password' />
        <input placeholder='비밀번호 확인' type='password' />
        <div className={styles.phone}>
          <input placeholder='휴대폰' type='text' />
          <button className={styles.verifyButton}>인증번호 받기</button>
        </div>
        <div className={styles.verifyPhone}>
          <input placeholder='인증번호' type='text' />
          <p>3:00</p>
        </div>

      </div>
    </div>
  );
}

export default Signup;