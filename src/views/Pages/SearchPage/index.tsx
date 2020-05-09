import React from 'react';
import { Dict } from '@app/utils/types';
import { IProduct } from '@app/domain/app/interface';
import { useSelector } from 'react-redux';
import { AppState } from '@app/utils/redux/store';
import { Empty } from 'antd';
import ProductListContainer from '@app/views/Containers/ProductListContainer';
// import ProductContainer from '@app/views/Containers/ProductContainer';

interface SearchPageProps {
  productsFound: Dict<IProduct>
  initSearch: boolean;
}

const SearchPage: React.FC = () => {
  const { productsFound, initSearch } = useSelector<AppState, SearchPageProps>((state) => ({
    productsFound: state.shop.itemFound,
    initSearch: state.shop.initSearch
  }))
  // const renderItem = (product: IProduct) => (
  //   <Row style={{ border: '1px solid #EDEDED', borderRadius: 5, margin: 2 }}>
  //     <Col span={6} style={{ borderRight: '0.5px solid #EDEDED' }}>
  //       <img src={product.imageUrl} style={{ objectFit: 'contain', width: 75, height: 60, borderRadius: '50%' }} alt="loading..." />
  //     </Col>
  //     <Col span={18} >
  //       <div style={{ display: 'grid', textAlign: 'left', marginLeft: 3 }}>
  //         <span>{product.title}</span>
  //         <span>{product.price}</span>
  //       </div>
  //     </Col>
  //   </Row>
  // )
  return (
    // <ProductContainer productList={productsFound} />
    <div>

      {
        Object.values(productsFound).length ?
          <ProductListContainer product={Object.values(productsFound)} />
          : !initSearch ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            : null
      }
    </div>
  );
};

export default SearchPage;