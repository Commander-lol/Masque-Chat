import React, { PropTypes } from 'react';
import css from './BurgerButton.css';

const BurgerButton = ({ onClick }) => (
  <div onClick={onClick} className={css.container}>
    <i className="fa fa-2x fa-bars"> </i>
  </div>
);

BurgerButton.propTypes = {
  onClick: PropTypes.func,
};

export default BurgerButton;
