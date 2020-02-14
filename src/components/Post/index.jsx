import React from 'react';
import { Link } from 'react-router-dom';
const Post = ({ posts, itemID }) => {
  const [
    { title, date, category, id, description, tags, contentSource }
  ] = posts.filter(item => item.id === Number(itemID));
  return (
    <div className='post'>
      <div className='post__header'>
        <h1 className='post__title'>{title}</h1>
        <div className='post__info'>
          <div className='post__date'>{date}</div>
          <Link to={`/category/${category}`} className='post__category'>
            {category}
          </Link>
        </div>
        {contentSource && (
          <a href={contentSource} className='post__source'>
            Источник материала
          </a>
        )}
        <div className='post__media'>
          <img
            src={`https://picsum.photos/id/23${id}/800/400`}
            className='post__media-img'
            alt={title}
          ></img>
        </div>
      </div>
      <div className='post__body'>
        <div className='post__content'>{description}</div>
        <div className='post__tags'>
          <div className='post__tags-header'>Тэги</div>
          <ul className='post__tags-list'>
            {tags.map((item, i) => (
              <li key={i} className='post__tags-item'>
                <Link to={`/tags/${item}`} className='post__tags-link'>
                  {`#${item}`}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;
