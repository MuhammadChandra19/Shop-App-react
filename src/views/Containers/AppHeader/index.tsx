import React, { useState } from 'react';
import { Layout, Col, Row, Input } from 'antd';
import { HeartTwoTone, SearchOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { ILayoutConfigProps } from '@app/domain/layout/interfaces';
import { history } from '@app/utils/redux/store';
import { MENU } from '@app/constant/menu';
import layoutService from '@app/domain/layout/services';
const { Header } = Layout

interface AppHeaderProps {
  currentPage: string;
  layoutconfig: ILayoutConfigProps;
}
const AppHeader: React.FC<AppHeaderProps> = ({ currentPage, layoutconfig }) => {
  const { setLayoutConfig } = layoutService
  const [lastPage, setLastPage] = useState("home")
  return (
    <Header style={{ background: 'white', padding: '0 10px' }}>

      {
        !layoutconfig.textHeader ? (
          <React.Fragment>
            <Row>
              <Col span={2}>
                {
                  layoutconfig.haveDefaultHeader ? (
                    <HeartTwoTone
                      twoToneColor="#7ACBCF"
                      style={{
                        fontSize: 25,
                        marginTop: 20,
                        marginLeft: -8,
                        cursor: "pointer"
                      }}
                    />
                  ) : (
                      <ArrowLeftOutlined
                        onClick={() => {
                          history.goBack()
                          setLayoutConfig(lastPage)
                        }}
                        style={{
                          fontSize: 22,
                          marginTop: 22,
                          marginLeft: -8,
                          color: "#7ACBCF",
                          cursor: "pointer"
                        }}
                      />
                    )

                }

              </Col>
              <Col span={22}>
                <Input
                  prefix={<SearchOutlined style={{ color: "#7ACBCF" }} />}
                  onFocus={() => {
                    if (currentPage === 'home') {
                      history.push(MENU.SEARCH_PAGE)

                      setLayoutConfig('search')
                    }
                    setLastPage(currentPage)
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