import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import styles from './Signin.module.css';

const Signin = () =>
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [, setCookie] = useCookies(['authToken', 'memberCookie']);
  const navigate = useNavigate();

  const handleLogin = async (e) =>
  {
    e.preventDefault();

    try
    {
      const response = await axios.post('https://introme.co.kr/v1/member/signin', {
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      if (response.data.token)
      {
        setCookie('authToken', response.data.token, { path: '/', maxAge: 7 * 24 * 60 * 60 });
        setCookie('memberCookie', response.data.member, { path: '/', maxAge: 7 * 24 * 60 * 60 });
        console.log('로그인 성공');
        navigate('/');
      } else
      {
        alert('로그인 실패');
      }
    } catch (error)
    {
      console.error('로그인 중 오류 발생', error);
      alert('로그인 중 오류가 발생했습니다.');
    }
  };

  const clearInput = () =>
  {
    setEmail('');
    setPassword('');
  };

  const togglePasswordVisibility = () =>
  {
    setShowPassword(!showPassword);
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
            type={showPassword ? 'text' : 'password'}
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
            <a href="/signup" onClick={(e) => { e.preventDefault(); navigate('/signup'); }}>회원가입</a>
            <a href="/findpassword">비밀번호 찾기</a>
          </div>
        </div>
      </div>
      <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Debug:홈으로</a>
    </div>
  );
};

export default Signin;
