import React from "react";
import { Link } from "react-router-dom";

import { CATEGORY } from "../../../helpers/apiConfig";

interface ICategoryNavigationProps {
  data: {};
}

const createCategoryLinks = (data: string[]) => {
  if (data) {
    return data.map((category: string) => {
      if (category === CATEGORY.ALL) {
        return (
          <li key={category}>
            <Link to={"/"}>{category}</Link>
          </li>
        );
      }

      return (
        <li key={category}>
          <Link to={"/category/" + category}>{category}</Link>
        </li>
      );
    });
  }
};

const CategoryNavigation = ({ data }: ICategoryNavigationProps) => {
  if (!data) {
    return (
      <div className="category-navigation-container">
        <p>No category links available</p>
      </div>
    );
  }

  return (
    <div className="category-navigation-container">
      <ul>{createCategoryLinks(Object.values(data))}</ul>
    </div>
  );
};

export default CategoryNavigation;
