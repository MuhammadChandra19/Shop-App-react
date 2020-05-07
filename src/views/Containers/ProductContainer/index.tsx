import React from 'react';
import { IProduct } from '@app/domain/app/interface';
import { Card } from 'antd';
import { HeartOutlined, ShopOutlined, HeartTwoTone } from '@ant-design/icons';
import ImageAsync from '@app/views/Components/ImageAsync';
import "@app/views/styles/Container/productList.scss"
import appService from '@app/domain/app/services';
import { Dict } from '@app/utils/types';

interface ProductContainerProps {
  productList: Dict<IProduct>
}

const ProductContainer: React.FC<ProductContainerProps> = ({ productList }) => {
  // const productList = useSelector<AppState, ProductContainerProps>(state => state.shop.productList)
  const { setFavorite } = appService

  const renderProductItem = (product: IProduct) => (
    <Card
      key={product.id}
      style={{ maxWidth: 400, marginTop: 15 }}
      actions={[
        <div style={{ display: 'grid' }}>
          {
            product.isLoved ?
              <HeartTwoTone
                size={15}
                twoToneColor="#eb2f96"
                key="like"
                onClick={() => setFavorite(product.id)}
              /> :
              <HeartOutlined
                size={15}
                key="like"
                onClick={() => setFavorite(product.id)}
              />
          }
          <p>
            {product.loved}{`${product.loved > 1 ? 'likes' : 'like'}`}
          </p>
        </div>
        ,
        <div style={{ display: 'grid' }}>
          <ShopOutlined size={15} key="shop" />
          <p>Add to cart</p>
        </div>

      ]}
      cover={
        <ImageAsync imgUrl={product.imageUrl} />
      }
    >
      <Card.Meta
        title={product.title}
        description={product.price}
      />
    </Card>
  )
  return (
    <div className="product-list">
      {Object.values(productList).map(renderProductItem)}
    </div>
  );
};

export default ProductContainer;