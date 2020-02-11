import React, { useEffect } from "react";
import axios from "axios";

import "./App.scss";
import Sidebar from "../Sidebar";
import FeaturedPosts from "../FeaturedPosts";
import Breadcrumb from "../Breadcrumb";


const App = ({ posts, setPosts }) => {
  useEffect(() => {
    axios.get("/posts.json").then(({ data }) => setPosts(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container blog">
      <Sidebar />
      <div className="content">
        <Breadcrumb />
        <FeaturedPosts posts={posts} />
      </div>
    </div>
  );
};

export default App;
