import React from 'react';

const FeaturedPosts = ({ posts }) => {
  return (
    <div className='featured-posts posts-list'>
      <div className='featured-posts__list'>
        {posts.map(item => (
          <div className='featured-posts__item posts-list__item' key={item.id}>
            <div className='posts-list__preview'>
              <img
                className='posts-list__preview-img'
                alt='example'
                src={`https://picsum.photos/id/23${item.id}/240/200`}
              />
            </div>
            <div className='posts-list__footer'>
              <div className='posts-list__title'>{item.title}</div>
              <div className='posts-list__description'>instagram.com</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
