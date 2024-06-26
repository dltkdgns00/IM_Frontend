import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './TeamSpace.module.css';
import { getCookie } from "../../../utils/cookies";
import { useNavigate } from 'react-router-dom';

const TeamSpace = () =>
{
  const [teams, setTeams] = useState([]);

  const navigate = useNavigate();

  const fetchData = async () =>
  {
    try
    {
      const memberCookie = getCookie('memberCookie');
      const decodedMemberCookie = decodeURIComponent(memberCookie);
      const userData = JSON.parse(decodedMemberCookie);

      const userId = userData.id;
      const response = await axios.get('https://introme.co.kr/v1/team/' + userId);

      setTeams(response.data);
    } catch (error)
    {
      console.error('팀스페이스를 불러오는 중 오류 발생', error);
    }
  };

  const imgGRC = (index) =>
  {
    if (index % 3 === 0)
      return '/images/teamSpace/1.png';
    else if (index % 3 === 1)
      return '/images/teamSpace/2.png';
    else
      return '/images/teamSpace/3.png';
  }

  const terminateDate = (date) =>
  {
    if (date === null)
      return '진행중';
    else
      return date;
  }

  const memberParse = (members) =>
  {
    let memberList = '';
    members.forEach(member =>
    {
      if (member === members[members.length - 1])
        memberList += member;
      else
        memberList += member + ', ';
    });
    return memberList;
  }


  const handleTeam = (teamId) =>
  {
    return () =>
    {
      navigate(`/community/teamspace/${teamId}`);
    }
  }

  useEffect(() =>
  {
    fetchData();
  }, []); // 빈 배열을 의존성으로 전달하여 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <div className={styles.TeamSpace}>
      {teams.length > 0 ? (
        teams.map((team, index) => (
          <div className={styles.team} onClick={handleTeam(team.id)} key={index}>
            <img className={styles.thumbnail} src={imgGRC(index)} alt="thumbnail" />
            <div className={styles.context}>
              <div className={styles.content}>
                <div className={styles.title}>{team.name}</div>
                <div className={styles.info}>
                  <p>{team.create + ' ~ ' + terminateDate(team.terminate)}</p>
                  <p>대표자: {team.owner}</p>
                  <p>팀원: {memberParse(team.members)}</p>
                </div>
              </div>
              <div className={styles.member}>
                <img src="/svgs/person.svg" alt="members"></img>
                <p>{team.members.length}</p>
              </div>
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
