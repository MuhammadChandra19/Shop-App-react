import React from 'react';
import { Layout } from 'antd';
import BottomNavigation from '../../BottomNavigation';
// import Home from '@app/views/Pages/Home';
import AppHeader from '../../AppHeader';
import SwitchRoute from '@app/views/Components/SwitchRoute';
import { PAGES } from '@app/routes';
const { Content } = Layout;

const Authorized: React.FC<any> = () => {
  return (
    <Layout>
      <AppHeader />
      <Content
        style={{ background: 'white' }}
      >
        <SwitchRoute routes={PAGES} />
      </Content>

      <BottomNavigation />
    </Layout>
  );
};

export default Authorized;