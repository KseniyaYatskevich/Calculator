import React from 'react';
import PropTypes from 'prop-types';
import './BlockWithSelectInput.css';
import SelectInput from '../SelectInput/SelectInput.jsx';

function BlockWithSelectInput({
  step,
  maxValue,
  minValue,
  onChangeHandler,
  value,
  titleBlock,
  onBlurHandler,
}) {
  return (
    <div className="block__input">
      <h2 className="block__input_title">{titleBlock}</h2>
      <SelectInput
        onChangeHandler={onChangeHandler}
        step = {step}
        maxValue = {maxValue}
        minValue = {minValue}
        value={value}
        onBlurHandler={onBlurHandler}
      />
    </div>
  );
}

BlockWithSelectInput.propTypes = {
  titleBlock: PropTypes.string,
  onChangeHandler: PropTypes.func,
  value: PropTypes.string,
  step: PropTypes.string,
  minValue: PropTypes.string,
  maxValue: PropTypes.string,
  onBlurHandler: PropTypes.func,
};

export default BlockWithSelectInput;
