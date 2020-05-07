import React, { useEffect } from 'react';
import appService from '@app/domain/app/services';
import CategoryLanding from '@app/views/Containers/CategoryLanding';
import { useSelector } from 'react-redux';
import { AppState } from '@app/utils/redux/store';
import { ShopState } from '@app/domain/app/redux/states';
import { SET_INIT_HOME_LOADING } from '@app/domain/app/redux/actions';
import { Spin } from '@app/views/Components/Spin';
// import BottomNavigation from '@app/views/Containers/BottomNavigation';
interface IHomeProps extends ShopState {
  isLoading: boolean
}
const Home: React.FC = () => {
  const { setHomeItem } = appService
  const { categoryList, isLoading } = useSelector<AppState, IHomeProps>((state) => ({
    categoryList: state.shop.categoryList,
    productList: state.shop.productList,
    isLoading: state.common.loading[SET_INIT_HOME_LOADING]
  }))
  useEffect(() => {
    setHomeItem()
  }, [])
  return (
    <div>
      {
        isLoading ? <Spin /> : <CategoryLanding categoryList={categoryList} />
      }

    </div>
  );
};

export default Home;