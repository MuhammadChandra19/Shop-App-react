import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout
import '@app/views/styles/Container/bottomNav.scss'
const BottomNavigation = () => {
  return (
    <div
      className="bottom-nav"
    >
      <Footer> ini footer</Footer>
    </div>
  );
};

export default BottomNavigation;