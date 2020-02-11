import React from 'react';
import { Card } from "antd";

const FeaturedPosts = ({ posts }) => {
  return (
    <div className="featured-posts">
      <div className="featured-posts__list">
        {posts.map(item => (
          <Card
            key={item.id}
            className="featured-posts__item post"
            hoverable
            // loading
            extra="new"
            cover={
              <img
                alt="example"
                src={`https://picsum.photos/id/23${item.id}/240/200`}
              />
            }
          >
            <Card.Meta
              className='post__description'
              title={<div className="post__title">{item.title}</div>}
              description="www.instagram.com"
              />

          </Card>
        ))}
      </div>
    </div>
  )
}

export default FeaturedPosts;
