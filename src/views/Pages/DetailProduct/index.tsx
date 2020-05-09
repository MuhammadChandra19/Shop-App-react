import React from 'react';
import { match } from 'react-router';
import { useSelector } from 'react-redux';
import { AppState, history } from '@app/utils/redux/store';
import { IProduct } from '@app/domain/app/interface';
import { ShareAltOutlined, LeftCircleOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import "@app/views/styles/Pages/detailProduct.scss"
import { Button } from 'antd';
import appService from '@app/domain/app/services';
import FavoriteButton from '@app/views/Containers/FavoriteButton';
import { shareProduct } from './share';

interface DetailProductProps {
  match: match<{ id: string }>
}
const DetailProduct: React.FC<DetailProductProps> = ({
  match: { params: { id } },
}) => {
  const { purchaseItem } = appService
  const product = useSelector<AppState, IProduct>(state => state.shop.productList[id])

  return (
    <div className="product-detail">
      <div className="image-container">
        <div className="image-container__action">
          <LeftCircleOutlined onClick={() => history.goBack()} />
          <ShareAltOutlined onClick={shareProduct} />
        </div>
        <img src={product.imageUrl} alt="loading...." />
      </div>
      <div className="product-detail__title">
        <h3>{product.title}</h3>
        <FavoriteButton isLoved={product.isLoved} productId={product.id} />
      </div>
      <div className="product-detail__description">
        {product.description}
      </div>
      <div className="product-detail__action">
        <h3>{product.price}</h3>
        <Button
          type="primary"
          onClick={() => purchaseItem(product)}
        >
          <MoneyCollectOutlined />
          BUY
        </Button>
      </div>
    </div>
  );
};

export default DetailProduct;