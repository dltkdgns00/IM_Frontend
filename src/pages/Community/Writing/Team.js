import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

import styles from './Post.module.css';

const Team = () =>
{
  const { teamId } = useParams();
  const [team, setTeam] = useState({}); // 올바르게 useState 사용

  const fetchData = async () =>
  {
    try
    {
      const response = await axios.get(`https://introme.co.kr/v1/board/${teamId}`);

      // 서버에서 받아온 데이터의 content 속성 확인
      if (response.data)
      {
        console.log(response.data);
        setTeam(response.data); // 데이터 설정
      } else
      {
        console.error('Unexpected data format:', response.data);
      }
    } catch (error)
    {
      console.error('글을 불러오는 중 오류 발생', error);
    }
  }

  useEffect(() =>
  {
    fetchData();
  }, []); // postId가 변경될 때마다 fetchData 호출

  return (
    <div className={styles.team}>
      <div className={styles.title}>
        <p>{team.title}</p>
      </div>
      <div className={styles.info}>
        <p>{team.author}</p>
        <p>{team.createAt}</p>
        <p>조회 {team.hit}</p>
      </div>
      {team.imgUrl && <img src={team.imgUrl} alt="team" />} {/* 이미지가 있을 경우에만 렌더링 */}
      <p>{team.content}</p>
    </div>
  );
}

export default Team;
