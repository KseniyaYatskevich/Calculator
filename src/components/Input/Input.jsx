import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

function Input({onChangeHandler, value}) {
  return (
    <input 
      type="text"
      value={value}
      onChange={onChangeHandler}
    />
  )
}

Input.propTypes = {
  onChangeHandler: PropTypes.func,
  value: PropTypes.string,
}

export default Input;