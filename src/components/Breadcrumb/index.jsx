import React from 'react';
// import { useHistory } from "react-router-dom";
// import routes from '../../routes';
// import {Switch, Route} from 'react-router-dom';
const Breadcrumb = () => {
  // let history = useHistory();


  return (

    <ol className='breadcrumb'>
      <li className='breadcrumb__item'>Home</li>
      <li className='breadcrumb__item'>Posts</li>
      <li className='breadcrumb__item breadcrumb__item--active'>PostName</li>
    </ol>
  );
};
export default Breadcrumb;
