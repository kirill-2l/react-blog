import React, { useEffect } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

import Sidebar from '../Sidebar';
import PostsList from '../../containers/PostsList';
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
          {/* <Route path='/:directory' render={(props) => <Breadcrumb {...props}/>} /> */}
        </div>
        {posts && (
          <div className='content__body'>
            <Switch>
              <Route exact path='/'>
                <PostsList
                  posts={posts.slice(0, 6)}
                  title={'Последние записи'}
                />
              </Route>
              <Route exact path='/posts/'>
                <PostsList posts={posts} title={'Все посты'} />
              </Route>

              <Route exact path='/category/javascript'>
                <PostsList
                  posts={posts.filter(item => item.category === 'JavaScript')}
                  title={'JavaScript'}
                />
              </Route>
              <Route exact path='/category/reactJS'>
                <PostsList
                  posts={posts.filter(item => item.category === 'ReactJS')}
                  title={'ReactJS'}
                />
              </Route>
              <Route
                exact
                path='/post/:postID'
                render={({ match }) => (
                  <Post posts={posts} itemID={match.params.postID} />
                )}
              ></Route>
              <Route exact path='/about'>
                <About />
              </Route>
              <Route
                exact
                path='/tag/:tagSlug'
                render={({ match }) => (
                  <PostsList
                    title={`Tag: ${match.params.tagSlug}`}
                    posts={posts.filter(item =>
                      item.tags.includes(match.params.tagSlug)
                    )}
                  />
                )}
              />
            </Switch>
          </div>
        )}
        <div className='content__footer'></div>
      </div>
    </div>
  );
};

export default App;
