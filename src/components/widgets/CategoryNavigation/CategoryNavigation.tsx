import React from 'react';
import { Link } from 'react-router-dom';

import { CATEGORY } from '../../../helpers/apiConfig';

const createCategoryLinks = (data: any) => {
  if (data) {
    return data.map((category: any) => {
      if (category === CATEGORY.ALL) {
        return <li key={category}><Link to={'/'}>{category}</Link></li>;
      }

      return <li key={category}><Link to={'/category/' + category}>{category}</Link></li>;
    });
  }
};

const CategoryNavigation = (props: any) => {
  if (!props.data) {
    return (
    <div className="category-navigation-container">
      <p>No category links available</p>
    </div>
    );
  }

  return (
    <div className="category-navigation-container">
      <ul>
        {createCategoryLinks(Object.values(props.data))}
      </ul>
    </div>
  );
};

export default CategoryNavigation;
