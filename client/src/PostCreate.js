import React, { useState } from 'react';
import axios from 'axios';

function PostCreate() {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.trim() === '') {
      setTitle('');
      return;
    }

    await axios.post('http://posts.com/posts/create', {
      title,
    });

    setTitle('');
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input 
            className="form-control" 
            type="text" 
            value={title} 
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default PostCreate;
