import React from 'react';

const Breadcrumb = ({ match }) => {
  return (
    <ol className='breadcrumb'>
      <li className='breadcrumb__item'>Home</li>
      <li className='breadcrumb__item'>Posts</li>
      <li className='breadcrumb__item breadcrumb__item--active'>PostName</li>
    </ol>
  );
};
export default Breadcrumb;
