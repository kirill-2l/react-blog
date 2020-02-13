import React from 'react';
import { useParams } from 'react-router-dom'
const Post = ({ posts }) => {
  const { postID } = useParams();
  if (posts) {
    const post = posts.filter(item => item.id === Number(postID));
    console.log(post)
  }
  return (
    // <div>{post.title}</div>1
    1
  );
};

export default Post;
