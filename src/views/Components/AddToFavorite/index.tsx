import React from 'react';
import { HeartTwoTone } from '@ant-design/icons';

const AddToFavorite = () => {
  return (
    <HeartTwoTone
      twoToneColor="#7ACBCF"
      style={{
        fontSize: 25,
        marginTop: 20,
        marginLeft: -8,
        cursor: "pointer"
      }}
    />
  );
};

export default AddToFavorite;