import React, { useState } from 'react';

const NewPost = () =>
{
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) =>
  {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) =>
  {
    setContent(e.target.value);
  };

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    // Call the API to create a new post
  };

  return (
    <div>
      <h1>Create a new post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={handleContentChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewPost;