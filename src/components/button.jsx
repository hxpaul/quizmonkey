'use strict';

const React = require('react');

let Button = ({ children, className, onClick }) => {
  const style = {
    margin: ' 0 1em 1em 0'
  };
  return <button className={'btn btn-primary ' + className} style={style} onClick={onClick}>{children}</button>;
};

if (process.env.NODE_ENV !== 'production') {
  const { func, node, string } = React.PropTypes;
  Button.propTypes = {
    children: node,
    className: string,
    onClick: func.isRequired
  };
}

module.exports = Button;
