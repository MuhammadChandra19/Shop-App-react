import React from 'react';
import { Layout, Col, Row } from 'antd';
import { HeartTwoTone, SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const { Header } = Layout


const AppHeader: React.FC = () => {
  return (
    <Header style={{ background: 'white', padding: '0 10px' }}>
      <Row>
        <Col span={2}>
          <HeartTwoTone
            twoToneColor="#7ACBCF"
            style={{
              fontSize: 25,
              marginTop: 20,
              marginLeft: -8
            }}
          />
        </Col>
        <Col span={22}>
          <Input prefix={<SearchOutlined style={{ color: "#7ACBCF" }} />} />
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;