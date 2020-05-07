import React from 'react';
import { ICategory } from '@app/domain/app/interface';
import '@app/views/styles/Container/categoryLanding.scss'

interface ICategoryLandingProps {
  categoryList: Array<ICategory>
}

const CategoryLanding: React.FC<ICategoryLandingProps> = ({ categoryList }) => {

  const renderItem = (category: ICategory) => (
    <div key={category.id} className="category-landing__item">
      <img src={category.imageUrl} alt={category.name} />
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