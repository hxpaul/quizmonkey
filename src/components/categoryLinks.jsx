'use strict';

const React = require('react');

let CategoryLinks = ({ categories, changeCategory }) => {
  return (
    <p>Category:
      {' '}
      <select onChange={(e) => changeCategory(e.target.value)}>
        {categories.map((category, i) => {
          return <option key={i} value={i}>{category}</option>;
        })}
      </select>
    </p>
  );
};

if (process.env.NODE_ENV !== 'production') {
  const { array, func, string } = React.PropTypes;
  CategoryLinks.propTypes = {
    categories: array,
    changeCategory: func.isRequired,
    title: string
  };
}

module.exports = CategoryLinks;
