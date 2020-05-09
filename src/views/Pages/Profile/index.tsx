import React from 'react';
import { Tabs } from 'antd';
import { UserOutlined, HistoryOutlined } from '@ant-design/icons';
import History from './History';
import User from './User';
const { TabPane } = Tabs;

const Profile: React.FC = () => {

  return (
    <Tabs defaultActiveKey="2">
      <TabPane
        tab={
          <span>
            <UserOutlined />
            Profile
          </span>
        }
        key="1"
      >
        <User />
      </TabPane>
      <TabPane
        key="2"
        tab={
          <span>
            <HistoryOutlined />
            Purchase History
          </span>
        }
      >
        <History />
      </TabPane>
    </Tabs>
  );
};

export default Profile;