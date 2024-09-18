import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../../../utils/cookies';
import axios from 'axios';

import styles from './NewPost.module.css';

const NewPost = () =>
{
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handleTitleChange = (e) =>
  {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) =>
  {
    setContent(e.target.value);
  };

  const handleFileChange = (e) =>
  {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) =>
  {
    e.preventDefault();

    if (title.trim() === '' || content.trim() === '')
    {
      alert('제목과 내용을 입력해주세요.');
      return;
    }

    const memberCookie = getCookie('memberCookie');
    const decodedMemberCookie = decodeURIComponent(memberCookie);
    const userData = JSON.parse(decodedMemberCookie);

    const formData = new FormData();
    formData.append('board', JSON.stringify({
      author: userData.id,
      title: title,
      content: content
    }));
    if (file)
    {
      formData.append('file', file);
    }

    try
    {
      const response = await axios.post('https://introme.co.kr/v1/board/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      if (response.data === '작성완료!')
      {
        navigate(-1);
      } else
      {
        alert('글 작성 중 오류가 발생했습니다.');
      }
    } catch (error)
    {
      console.error('Error submitting the post:', error);
      alert('글 작성 중 오류가 발생했습니다.');
    }
  };

  const handleCancel = () =>
  {
    navigate(-1);
  }

  return (
    <div className={styles.newpost}>
      <div className={styles.p}>
        <p>새 글</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.title}
          type="text"
          placeholder="제목"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          className={styles.content}
          placeholder="내용"
          value={content}
          onChange={handleContentChange}
        />
        <input
          className={styles.file}
          type="file"
          onChange={handleFileChange}
        />
        <button className={styles.submit} type="submit">생성</button>
        <button className={styles.cancel} onClick={handleCancel} type="button">취소</button>
      </form>
    </div>
  );
}

export default NewPost;
