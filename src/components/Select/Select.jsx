import React from 'react';
import PropTypes from 'prop-types';
import './Select.css';


function Select({
  titleBlock,
  arrayValues,
  onChangeHandler,
  value,
  onBlurHandler,
}) {
  return (
    <div className="block__select">
      <h2 className="block__select_title">{titleBlock}</h2>
      <select
        onChange={onChangeHandler}
        value={value}
        onBlur={onBlurHandler}
      >
      {arrayValues.map((miliages, index) => (
        <option
          key={index}
        >{miliages}</option>
      ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  titleBlock: PropTypes.string,
  arrayValues: PropTypes.array,
  onChangeHandler: PropTypes.func,
  value: PropTypes.string,
  onBlurHandler: PropTypes.func,
};

export default Select;
