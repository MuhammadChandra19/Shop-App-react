import React, {
  // useState 
} from 'react';
import { Layout, Col, Row } from 'antd';

import { ILayoutConfigProps } from '@app/domain/layout/interfaces';
import { history } from '@app/utils/redux/store';
import { MENU } from '@app/constant/menu';
// import layoutService from '@app/domain/layout/services';
import SearchProduct from '../SearchProduct';
import AddToFavorite from '@app/views/Components/AddToFavorite';
import BackButton from '@app/views/Components/BackButton';
const { Header } = Layout

interface AppHeaderProps {
  currentPage: string;
  layoutconfig: ILayoutConfigProps;
}
const AppHeader: React.FC<AppHeaderProps> = ({ currentPage, layoutconfig }) => {
  // const { setLayoutConfig } = layoutService
  // const [lastPage, setLastPage] = useState("home")
  return (
    <Header style={{ background: 'white', padding: '0 10px' }}>

      {
        !layoutconfig.textHeader ? (
          <React.Fragment>
            <Row>
              <Col span={2}>
                {
                  layoutconfig.haveDefaultHeader ? (
                    <AddToFavorite />
                  ) : (
                      <BackButton
                      // onBack={() => setLayoutConfig(lastPage)}
                      />

                    )
                }
              </Col>
              <Col span={22}>
                <SearchProduct
                  onClickOutside={() => {
                    if (currentPage === 'home') {
                      history.push(MENU.SEARCH_PAGE)

                      // setLayoutConfig('search')
                    }
                    // setLastPage(currentPage)
                  }}

                />
              </Col>
            </Row>
          </React.Fragment>
        ) :
          <h1
            style={{
              color: "#7ACBCF",
              float: "left"
            }}
          >{layoutconfig.textHeader}</h1>
      }


    </Header>
  );
};

export default AppHeader;