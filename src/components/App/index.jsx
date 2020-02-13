import React, { useEffect } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

import Sidebar from '../Sidebar';
// import Breadcrumb from '../Breadcrumb';
import PostsList from '../PostsList';
import Post from '../Post';
import About from '../About';
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
          {/* <Route path="/posts" component={Breadcrumb}/> */}
        </div>
        <div className='content__body'>
          <Switch>
            <Route exact path='/'>
              <PostsList posts={posts && posts.slice(0, 6)} />
            </Route>
            <Route exact path='/posts'>
              <PostsList posts={posts && posts} topic={'Все записи'} />
            </Route>
            <Route exact path='/category/javascript'>
              <PostsList
                posts={posts && posts.filter(item => item.topic === 'JavaScript')}
                topic={'JavaScript'}
              />
            </Route>
            <Route exact path='/category/reactJS'>
              <PostsList
                posts={posts && posts.filter(item => item.topic === 'ReactJS')}
                topic={'ReactJS'}
              />
            </Route>
            <Route exact path='/post/:postID' component={() => <Post posts={posts} />}>
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
          </Switch>
        </div>
        <div className='content__footer'></div>
      </div>
    </div>
  );
};

export default App;
