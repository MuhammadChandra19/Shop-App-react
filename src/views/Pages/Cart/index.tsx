import React from 'react';
import { ICart } from '@app/domain/app/interface';
import { Dict } from '@app/utils/types';
import { useSelector } from 'react-redux';
import { AppState } from '@app/utils/redux/store';
import ProductListContainer from '@app/views/Containers/ProductListContainer';
import { Empty } from 'antd';

const Cart: React.FC = () => {
  const cartList = useSelector<AppState, Dict<ICart>>(state => state.shop.cart)
  return (
    <div>
      {
        Object.values(cartList).length ? (
          <ProductListContainer product={Object.values(cartList)} isCart />
        ) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      }
    </div>
  );
};

export default Cart;