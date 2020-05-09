import React from 'react';
import { IProduct, ICart } from '@app/domain/app/interface';
import { List, Avatar, Button } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
import "@app/views/styles/Container/productListContainer.scss"
import { history } from '@app/utils/redux/store';
import { MENU } from '@app/constant/menu';
interface ProductListContainerProps {
  product: Array<IProduct | ICart>
  isCart?: boolean
}

const ProductListContainer: React.FC<ProductListContainerProps> = ({ product, isCart = false }) => {
  return (
    <List
      className="product-list-container"
      itemLayout="horizontal"
      dataSource={product}
      renderItem={Item => (
        <List.Item

          actions={
            isCart ? [
              <Button type="link">
                <DeleteFilled />
              </Button>
            ] : []
          }
        >
          <List.Item.Meta

            avatar={
              <Avatar
                size={60}
                src={Item.imageUrl}
              />
            }
            title={
              <div
                onClick={() => history.push(`${MENU.DETAIL_PRODUCT}/${Item.id}`)}
              >
                {Item.title}
              </div>

            }
            description={Item.price}
          />
          {isCart && <div>{(Item as ICart).total}</div>}
        </List.Item>
      )}
    />
  );
};

export default ProductListContainer;