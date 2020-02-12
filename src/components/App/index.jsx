import React, { useEffect } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

import Sidebar from '../Sidebar';
import Breadcrumb from '../Breadcrumb';
import FeaturedPosts from '../FeaturedPosts';
import './App.scss';

const App = ({ posts, setPosts }) => {
  useEffect(() => {
    axios.get('/posts.json').then(({ data }) => setPosts(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='container blog'>
      <Sidebar />
      <div className='content'>
        <div className='content__head'>
          <Route path="/posts" component={Breadcrumb}/>
        </div>
        <div className='content__body'>
          <Switch>
            <Route path='/posts'>1</Route>
            <Route path='/posts/:id'>posts inner</Route>
            <Route exact path='/'>
              <FeaturedPosts posts={posts} />
            </Route>
          </Switch>
        </div>
        <div className='content__footer'></div>
      </div>
    </div>
  );
};

export default App;
