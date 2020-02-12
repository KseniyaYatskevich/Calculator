import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import className from 'classnames/bind';

function Button({
  onClickHandler,
  value,
  isActive,
  isSmallButton,
}) {
  return (
    <button
      onClick={() => onClickHandler(value)}
      className={className('button', { button__active: isActive }, { button__small: isSmallButton })}
      value={value}
    >
      {value}
    </button>
  );
}

Button.propTypes = {
  onClickHandler: PropTypes.func,
  value: PropTypes.string,
  isActive: PropTypes.bool,
  isSmallButton: PropTypes.bool,
};

export default Button;
