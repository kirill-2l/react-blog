import React from 'react';

const Post = ({ title, description, id }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className='post'>{description}</div>
      <div>{id}</div>
    </div>
  );
};

export default Post;
