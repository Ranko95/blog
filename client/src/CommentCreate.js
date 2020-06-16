import React, { useState } from 'react';
import axios from 'axios';

function CommentCreate({ postId }) {

  const [content, setContent] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setContent(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(content.trim() === '') {
      setContent('');
      return;
    }

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input className="form-control" type="text" value={content} onChange={handleChange} />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CommentCreate;
