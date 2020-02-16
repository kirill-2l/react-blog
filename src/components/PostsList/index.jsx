import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const PostsList = ({ posts, title, searchQuery }) => {
  let location = useLocation();
  let [titleState, setTitleState] = useState(title);
  useEffect(() => {
    const searchQuery = location.search.replace('?search=', '');
    searchQuery.length ? setTitleState(`По запросу: '${searchQuery}' найдено ${posts.lengthl} элементов`) : setTitleState(title);
  }, [location])

  return (
    <div className='featured-posts posts-list'>
      <h2 className='featured-posts__title'>{titleState}</h2>
      <div className='featured-posts__list'>
        {posts && posts.map(item => (
          <div className='featured-posts__item posts-list__item' key={item.id}>
            <div className='posts-list__preview'>
              <img
                className='posts-list__preview-img'
                alt='example'
                src={`https://picsum.photos/id/23${item.id}/800/500`}
              />
            </div>
            <div className='posts-list__footer'>
              <Link
                to={`/post/${item.id}`}
                className='posts-list__title'
              >
                {item.title}
              </Link>
              <div className='posts-list__description'>instagram.com</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsList;
