import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.css';

const Login = () =>
{
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const clearInput = () =>
  {
    setEmail('');
    setPassword('');
  }

  const togglePasswordVisibility = () =>
  {
    setShowPassword(!showPassword);
  };

  const handleLogin = () =>
  {
    // 로그인 로직을 여기에 추가합니다.
    // 로그인 성공 시 홈 화면으로 이동합니다.
    navigate('/');
  };

  return (
    <div className={styles.Login}>
      <div className={styles.logo}>
        <img src="svgs/INTROME.svg" alt="logo" />
      </div>
      <div className={styles.loginForm}>
        <div className={styles.input_container}>
          <input
            placeholder='이메일'
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={styles.clear_btn} onClick={clearInput}>
            <img src="svgs/clear.svg" alt="clear" />
          </div>
        </div>
        <div className={styles.input_container}>
          <input
            placeholder='비밀번호'
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={styles.hidden_btn} onClick={togglePasswordVisibility}>
            {showPassword ? (
              <img src="svgs/hidden.svg" alt="hidden" />
            ) : (
              <img src="svgs/visible.svg" alt="visible" />
            )}
          </div>
        </div>

        <button type="submit" className={styles.loginButton} onClick={handleLogin}>로그인</button>
        <div className={styles.options}>
          <div>
            <input className={styles.rememberMeCheckBox} type="checkbox" id="rememberMe" name="rememberMe" value="자동 로그인" />
            <label htmlFor="rememberMe">자동 로그인</label>
          </div>
          <div>
            <a href="/signup" onClick={navigate("/signup")}>회원가입</a>
            <a href="/findpassword">비밀번호 찾기</a>
          </div>
        </div>
      </div>
      <a href="/" onClick={navigate("/")}>Debug:홈으로</a>
    </div>
  );
}

export default Login;