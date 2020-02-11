import React from 'react';
import PropTypes from 'prop-types';
import './SelectInput.css';

function SelectInput({
  step,
  maxValue,
  minValue,
  onChangeHandler,
  value,
}) {
  return (
    <input
      type="number"
      step = {step}
      min = {minValue}
      max = {maxValue}
      value={value}
      onBlur={onChangeHandler}
    />
  );
}

SelectInput.propTypes = {
  maxValue: PropTypes.string,
  minValue: PropTypes.string,
  step: PropTypes.string,
  onChangeHandler: PropTypes.func,
  value: PropTypes.string,
};

export default SelectInput;
