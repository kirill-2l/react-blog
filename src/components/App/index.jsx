import React, { useEffect } from 'react'
import axios from "axios";

import './App.scss';
import TopMenu from '../Menu';
import Breadcrumb from '../Breadcrumb';
import { Card, Layout, Icon, Row, Col } from 'antd';

const { Header, Content, Footer } = Layout;




const App = ({ posts, setPosts }) => {
  useEffect(() => {
    axios.get('/posts.json').then(({ data }) => setPosts(data));
  }, [])
  return (
    <Layout>
      <Header>
        <div className="logo" />
        <TopMenu />
      </Header>
      <Content style={{ padding: '0 50px' }}>
      <Breadcrumb />
        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
          {posts.map(item => (
            <Col span={8} key={item.id}>
              <Card
                hoverable

                cover={<img alt="example" src={`https://picsum.photos/id/23${item.id}/240/200`} />}
              >
                <Card.Meta title={item.title} description="www.instagram.com" />
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
      <Footer />
    </Layout>
  )
}

export default App;
