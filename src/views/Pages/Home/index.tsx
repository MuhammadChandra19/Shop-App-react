import React, { useEffect } from 'react';
import appService from '@app/domain/app/services';
import CategoryLanding from '@app/views/Containers/CategoryLanding';
import { useSelector } from 'react-redux';
import { AppState } from '@app/utils/redux/store';
import { SET_INIT_HOME_LOADING } from '@app/domain/app/redux/actions';
import { Spin } from '@app/views/Components/Spin';
import ProductContainer from '@app/views/Containers/ProductContainer';
import { ICategory, IProduct } from '@app/domain/app/interface';
import { Dict } from '@app/utils/types';
// import BottomNavigation from '@app/views/Containers/BottomNavigation';
interface IHomeProps {
  isLoading: boolean
  categoryList: Array<ICategory>
  productList: Dict<IProduct>
}
const Home: React.FC = () => {
  const { setHomeItem } = appService
  const { categoryList, isLoading, productList } = useSelector<AppState, IHomeProps>((state) => ({
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
        isLoading ?
          <Spin /> :
          <React.Fragment>
            <CategoryLanding categoryList={categoryList} />
            <ProductContainer productList={productList} />
          </React.Fragment>
      }

    </div>
  );
};

export default Home;