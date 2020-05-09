import React, { useEffect } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import appService from '@app/domain/app/services';
interface SearchProductProps {
  onClickOutside: () => void
}
const SearchProduct: React.FC<SearchProductProps> = ({ onClickOutside }) => {
  const { searchItem, setHomeItem } = appService
  useEffect(() => {
    setHomeItem()
  }, [])
  return (
    <Input
      prefix={<SearchOutlined style={{ color: "#7ACBCF" }} />}
      onFocus={onClickOutside}
      onChange={(e) => searchItem(e.target.value)}

    />
  );
};

export default SearchProduct;