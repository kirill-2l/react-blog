import React from 'react';
import { Link } from 'react-router-dom';

const PostsList = ({ posts, title, searchQuery }) => {
  return (
    <div className='featured-posts posts-list'>
      <h2 className='featured-posts__title'>
        {searchQuery
          ? `По запросу: ${searchQuery} найдено ${posts.length} записей`
          : title}
      </h2>
      <div className='featured-posts__list'>
        {posts &&
          posts.map(item => (
            <div
              className='featured-posts__item posts-list__item'
              key={item.id}
            >
              <div className='posts-list__preview'>
                <img
                  className='posts-list__preview-img'
                  alt='example'
                  src={`https://picsum.photos/id/23${item.id}/800/500`}
                />
              </div>
              <div className='posts-list__footer'>
                <Link to={`/post/${item.id}`} className='posts-list__title'>
                  {item.title}
                </Link>
                <div className='posts-list__tags'>
                  {item.tags.map((item, i) => (
                    <Link
                      key={i}
                      to={`/tag/${item}`}
                      className='posts-list__tags-item'
                    >
                      {`#${item}`}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostsList;
