import React from 'react';
import { IProduct } from '@app/domain/app/interface';
import { Card } from 'antd';
import { ShopOutlined } from '@ant-design/icons';
import ImageAsync from '@app/views/Components/ImageAsync';
import "@app/views/styles/Container/productList.scss"
import appService from '@app/domain/app/services';
import { Dict } from '@app/utils/types';
import { history } from '@app/utils/redux/store';
import { MENU } from '@app/constant/menu';
import FavoriteButton from '../FavoriteButton';

interface ProductContainerProps {
  productList: Dict<IProduct>
}

const ProductContainer: React.FC<ProductContainerProps> = ({ productList }) => {
  // const productList = useSelector<AppState, ProductContainerProps>(state => state.shop.productList)
  const { addToCart } = appService

  const renderProductItem = (product: IProduct) => (
    <Card
      key={product.id}
      style={{ maxWidth: 400, marginTop: 15 }}
      actions={[
        <div style={{ display: 'grid' }}>
          <FavoriteButton isLoved={product.isLoved} productId={product.id} />
          <p>
            {product.loved}{`${product.loved > 1 ? 'likes' : 'like'}`}
          </p>
        </div>
        ,
        <div style={{ display: 'grid' }}>
          <ShopOutlined
            size={15} key="shop"
            onClick={() => addToCart(product)}
          />
          <p>Add to cart</p>
        </div>

      ]}
      cover={
        <ImageAsync
          onClick={() => history.push(`${MENU.DETAIL_PRODUCT}/${product.id}`)}
          imgUrl={product.imageUrl}
        />
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