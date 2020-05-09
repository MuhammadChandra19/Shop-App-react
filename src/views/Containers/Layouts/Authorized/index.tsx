import React, { useEffect } from 'react';
import { Layout } from 'antd';
import BottomNavigation from '../../BottomNavigation';
// import Home from '@app/views/Pages/Home';
import AppHeader from '../../AppHeader';
import SwitchRoute from '@app/views/Components/SwitchRoute';
import { PAGES } from '@app/routes';
import layoutService from '@app/domain/layout/services';
import { history, AppState } from '@app/utils/redux/store';
import { useSelector } from 'react-redux';
import { ILayoutConfigProps } from '@app/domain/layout/interfaces';



const { Content } = Layout;

interface LayoutProps {
  currentPage: string;
  layoutconfig: ILayoutConfigProps
}

const Authorized: React.FC = () => {

  const { setLayoutConfig } = layoutService
  const { currentPage, layoutconfig } = useSelector<AppState, LayoutProps>((state) => ({
    currentPage: state.layout.curretPage,
    layoutconfig: state.layout.layoutConfig
  }))

  useEffect(() => {
    setLayoutConfig()
    history.listen((location) => {
      const path = location.pathname.split("/")[1]
      setLayoutConfig(path)
    })

  }, [])

  const selectMenu = (url: string, key: string) => {
    history.replace(url)
    // setLayoutConfig(key)
  }
  return (
    <Layout>
      <AppHeader
        currentPage={currentPage}
        layoutconfig={layoutconfig}
      />
      <Content
        style={{
          background: 'white',
          marginBottom: layoutconfig.isBottomNavVisible ? 55 : 0
        }}
      >
        <SwitchRoute routes={PAGES} />
      </Content>
      {
        layoutconfig?.isBottomNavVisible
        && (<BottomNavigation
          onSelect={selectMenu}
          currentPage={currentPage}
        />)
      }

    </Layout>
  );
};

export default Authorized;