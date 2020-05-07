import React from 'react';
import { ICategory } from '@app/domain/app/interface';
import '@app/views/styles/Container/categoryLanding.scss'
import ImageAsync from '@app/views/Components/ImageAsync';

interface ICategoryLandingProps {
  categoryList: Array<ICategory>
}

const CategoryLanding: React.FC<ICategoryLandingProps> = ({ categoryList }) => {

  const renderItem = (category: ICategory) => (
    <div key={category.id} className="category-landing__item">
      <ImageAsync imgUrl={category.imageUrl} />
      {/* <img src={category.imageUrl} alt={category.name} /> */}
      <p>{category.name}</p>
    </div>
  )
  return (
    <div className="category-landing">
      {
        categoryList.map(renderItem)
      }
    </div>
  );
};

export default CategoryLanding;