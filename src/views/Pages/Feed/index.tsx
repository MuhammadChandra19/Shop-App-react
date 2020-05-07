import React, { useEffect } from 'react';
import { Dict } from '@app/utils/types';
import { IProduct } from '@app/domain/app/interface';
import appService from '@app/domain/app/services';
import { useSelector } from 'react-redux';
import { AppState } from '@app/utils/redux/store';
import { SET_INIT_HOME_LOADING } from '@app/domain/app/redux/actions';
import ProductContainer from '@app/views/Containers/ProductContainer';
import { Spin } from '@app/views/Components/Spin';

interface FeedProps {
  productList: Dict<IProduct>
  isLoading: boolean
}
const Feed: React.FC = () => {
  const { setHomeItem } = appService

  const { productList, isLoading } = useSelector<AppState, FeedProps>((state) => ({
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
          <ProductContainer productList={productList} />
      }
    </div>
  );
};

export default Feed;