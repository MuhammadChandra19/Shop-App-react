import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '@app/utils/redux/store';
import { Dict } from '@app/utils/types';
import ProductListContainer from '@app/views/Containers/ProductListContainer';
import { IPurchasedHistory } from '@app/domain/app/interface';
import { Empty } from 'antd';

const Profile: React.FC = () => {
  const purchasedList = useSelector<AppState, Dict<IPurchasedHistory>>(state => state.shop.purchaseHistory)
  return (
    <div>
      {
        Object.values(purchasedList).length ? (
          <ProductListContainer product={Object.values(purchasedList)} />
        ) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      }
    </div>
  );
};

export default Profile;