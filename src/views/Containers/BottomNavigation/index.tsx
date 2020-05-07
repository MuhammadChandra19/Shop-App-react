import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout
import '@app/views/styles/Container/bottomNav.scss'
// import { HomeOutlined, GlobalOutlined } from '@ant-design/icons';
import { PAGES } from '@app/routes';
import { RouteItem } from '@app/utils/router/route.item';


// import { MENU } from '@app/constant/menu';

interface BottomNavigationProps {
  currentPage: string;
  onSelect: (url: string, key: string) => void

}
const BottomNavigation: React.FC<BottomNavigationProps> = ({ currentPage, onSelect }) => {
  // const [activeNav, setActiveNav] = useState('home')

  const renderNavItem = (item: RouteItem) => {
    return item.isOnBottomNavbar &&
      (
        <div
          key={item.key}
          className="bottom-nav__item"
          onClick={() => onSelect(item.url, item.key)}
        >
          <item.icon
            style={{
              color: currentPage === item.key ? "#7ACBCF" : "#E8E8E8"
            }}
          />
          <span
            className="bottom-nav__item__text"
            style={{
              color: currentPage === item.key ? "#F39F1E" : "#E8E8E8"
            }}
          >
            {item.text}
          </span>
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