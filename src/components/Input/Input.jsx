import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

function Input({ onChangeHandler, value, onBlurHandler }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
    />
  );
}

Input.propTypes = {
  onChangeHandler: PropTypes.func,
  value: PropTypes.string,
  onBlurHandler: PropTypes.func,
};

export default Input;
