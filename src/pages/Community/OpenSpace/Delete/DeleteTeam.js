import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getCookie } from '../../../../utils/cookies';

const DeleteTeam = () =>
{
  const { teamId } = useParams();

  const memberCookie = getCookie('memberCookie');
  const decodedMemberCookie = decodeURIComponent(memberCookie);
  const userData = JSON.parse(decodedMemberCookie);

  // const handleDelete = async () =>
  // {
  //   if (window.confirm('프로젝트를 종료하시겠습니까?'))
  //   {
  //     const response = await axios.post(`https://introme.co.kr/v1/team/terminate`,
  //       {
  //         "ownerId": userData.id,
  //         "teamId": teamId,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         }
  //       }
  //     );
  //     if (response.data)
  //     {
  //       alert('프로젝트가 종료되었습니다.');
  //       window.location.href = '/community/teamspace';
  //     } else
  //     {
  //       console.error('Unexpected data format:', response.data);
  //     }
  //   }
  // }

  return (
    <div>
      <p>정말로 프로젝트를 삭제하시겠습니까?</p>
      <p>경고 한번 삭제한 프로젝트는 되돌릴 수 없습니다.</p>
      <button>삭제하기</button>
    </div>
  );
}

export default DeleteTeam;