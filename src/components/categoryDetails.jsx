'use strict';

const React = require('react');

let CategoryDetails = ({ categoryDetails, questionsTotal }) => {
  return <p>{questionsTotal} questions, {categoryDetails}</p>;
};

if (process.env.NODE_ENV !== 'production') {
  const { number, string } = React.PropTypes;
  CategoryDetails.propTypes = {
    categoryDetails: string.isRequired,
    questionsTotal: number.isRequired
  };
}
module.exports = CategoryDetails;
