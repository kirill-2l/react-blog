import React, { useEffect } from "react";
import axios from "axios";

import "./App.scss";
import Sidebar from "../Sidebar";
import Breadcrumb from "../Breadcrumb";
import { Card } from "antd";

const App = ({ posts, setPosts }) => {
  useEffect(() => {
    axios.get("/posts.json").then(({ data }) => setPosts(data));
  }, []);
  return (
    <div className="container">
      <Sidebar />
      <Breadcrumb />
      {posts.map(item => (
        <Card
          key={item.id}
          hoverable
          cover={
            <img
              alt="example"
              src={`https://picsum.photos/id/23${item.id}/240/200`}
            />
          }
        >
          <Card.Meta title={item.title} description="www.instagram.com" />
        </Card>
      ))}
    </div>
  );
};

export default App;
