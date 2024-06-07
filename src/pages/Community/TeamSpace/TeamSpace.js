import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './TeamSpace.module.css';
import { getCookie } from "../../../utils/cookies";

const TeamSpace = () =>
{
  const [teams, setTeams] = useState([]);

  const fetchData = async () =>
  {
    try
    {
      const memberCookie = getCookie('memberCookie');
      const decodedMemberCookie = decodeURIComponent(memberCookie);
      const userData = JSON.parse(decodedMemberCookie);

      const userId = userData.id;
      const response = await axios.get('https://introme.co.kr/v1/team/' + userId);

      console.log(response.data);

      setTeams(response.data);
    } catch (error)
    {
      console.error('팀스페이스를 불러오는 중 오류 발생', error);
    }
  };

  useEffect(() =>
  {
    fetchData();
  }, []); // 빈 배열을 의존성으로 전달하여 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <div className={styles.TeamSpace}>
      {teams.length > 0 ? (
        teams.map((team, index) => (
          <div className={styles.team} key={index}>
            <div className={styles.title}>{team.name}</div>
            <div className={styles.info}>
              <p className={styles.members}>{team.members.join(', ')}</p>
              <p className={styles.date}>{team.create}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p> // 데이터가 로드되지 않았을 때 로딩 메시지 표시
      )}
    </div>
  );
};

export default TeamSpace;
