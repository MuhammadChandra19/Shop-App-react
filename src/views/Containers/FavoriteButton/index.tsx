import React from 'react';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import appService from '@app/domain/app/services';
interface FavoriteButtonProps {
  isLoved: boolean;
  productId: string
}
const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isLoved, productId }) => {
  const { setFavorite } = appService
  return (
    <React.Fragment>
      {
        isLoved ?
          <HeartFilled
            style={{ color: "red" }}
            onClick={() => setFavorite(productId)}
          />
          :
          <HeartOutlined
            onClick={() => setFavorite(productId)}
          />
      }
    </React.Fragment>

  );
};

export default FavoriteButton;