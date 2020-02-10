import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './ButtonsBlock.css';
// import className from 'classnames/bind';

function ButtonsBlock({selectValue, selectedValue, titleBlock, arrayValues}) {

  return (
    <div className="block__buttons">
      <h2 className="block__buttons_title">{titleBlock}</h2>
        {arrayValues.map((period, index) => ( 
          <Button 
            value={period} 
            key={index} 
            onClickHandler={selectValue}
            isActive={period === selectedValue}
            isSmallButton = {true}
          >
          </Button>
        ))}
    </div> 
  )
}

ButtonsBlock.propTypes = {
  selectValue: PropTypes.func,
  selectedValue: PropTypes.string,
  titleBlock: PropTypes.string,
  arrayValues: PropTypes.array,
}

export default ButtonsBlock;