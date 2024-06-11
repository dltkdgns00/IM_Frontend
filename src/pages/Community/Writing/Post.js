import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

import styles from './Post.module.css';

const Post = () =>
{
  const { postId } = useParams();
  const [post, setPost] = useState({}); // 올바르게 useState 사용
  const [comment, setComment] = useState({}); // 올바르게 useState 사용


  const fetchPost = async () =>
  {
    try
    {
      const response = await axios.get(`https://introme.co.kr/v1/board/${postId}`);

      // 서버에서 받아온 데이터의 content 속성 확인
      if (response.data)
      {
        console.log(response.data);
        setPost(response.data); // 데이터 설정
      } else
      {
        console.error('Unexpected data format:', response.data);
      }
    } catch (error)
    {
      console.error('글을 불러오는 중 오류 발생', error);
    }
  }

  // const fetchComment = async () =>
  // {
  //   try
  //   {
  //     const response = await axios.post(`https://introme.co.kr/v1/comment/comment`, { postId },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );

  //     // 서버에서 받아온 데이터의 content 속성 확인
  //     if (response.data)
  //     {
  //       console.log(response.data);
  //       setComment(response.data); // 데이터 설정
  //     } else
  //     {
  //       console.error('Unexpected data format:', response.data);
  //     }
  //   } catch (error)
  //   {
  //     console.error('글을 불러오는 중 오류 발생', error);
  //   }
  // }

  useEffect(() =>
  {
    fetchPost();
    // fetchComment();
  }, []); // postId가 변경될 때마다 fetchData 호출

  return (
    <div className={styles.post}>
      <div className={styles.title}>
        <p>{post.title}</p>
      </div>
      <div className={styles.info}>
        <p>{post.author}</p>
        <p>{post.createAt}</p>
        <p>조회 {post.hit}</p>
      </div>
      {post.imgUrl && <img src={post.imgUrl} alt="post" />} {/* 이미지가 있을 경우에만 렌더링 */}
      <p>{post.content}</p>
      <div className={styles.comment}>
        <p>{comment.content}</p>
        <p>{comment.createAt}</p>
        <p>{comment.author}</p>
      </div>
    </div>
  );
}

export default Post;
