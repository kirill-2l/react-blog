import React from 'react';
import { useHistory } from "react-router-dom";
// import {routes} from '../../containers/App';
const Breadcrumb = () => {
  // let history = useHistory();



  const routes = {
    '/': 'Home',
    '/posts': 'Posts',
    '/posts/:slug': ':slug',
  }

  return (
    <ol className='breadcrumb'>
      <li className='breadcrumb__item'>Home</li>
      <li className='breadcrumb__item'>Posts</li>
      <li className='breadcrumb__item breadcrumb__item--active'>PostName</li>
    </ol>
  );
};
export default Breadcrumb;
