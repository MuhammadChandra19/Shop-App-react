import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout
import '@app/views/styles/Container/bottomNav.scss'
// import { HomeOutlined, GlobalOutlined } from '@ant-design/icons';
import { PAGES } from '@app/routes';
import { RouteItem } from '@app/utils/router/route.item';
import { history } from '@app/utils/redux/store';
// import { MENU } from '@app/constant/menu';
const BottomNavigation = () => {
  // const [activeNav, setActiveNav] = useState('home')

  const renderNavItem = (item: RouteItem) => {
    return item.isOnBottomNavbar &&
      (
        <div
          key={item.key}
          className="bottom-nav__item"
          onClick={() => history.replace(item.url)}
        >
          <item.icon />
          <span className="bottom-nav__item__text">{item.text}</span>
        </div>
      )
  }
  return (
    <div
      className="bottom-nav"
    >
      <Footer>
        {PAGES.map(renderNavItem)}
        {/* {renderNavItem()} */}
      </Footer>
    </div>
  );
};

export default BottomNavigation;