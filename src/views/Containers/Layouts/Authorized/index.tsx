import React from 'react';
import { Layout } from 'antd';
import BottomNavigation from '../../BottomNavigation';
import Home from '@app/views/Pages/Home';
import AppHeader from '../../AppHeader';
const { Content } = Layout;
const Authorized = () => {
  return (
    <Layout>
      <AppHeader />
      <Content
        style={{ background: 'white' }}
      >
        <Home />
      </Content>

      <BottomNavigation />
    </Layout>
  );
};

export default Authorized;