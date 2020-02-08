import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import className from 'classnames/bind';


function Button({onClickHandler, value, isActive}) {
    return (
      <button 
        onClick={() => onClickHandler(value)} 
        className={className('button', {'button__active': isActive})}
        value={value}>
          {value}
      </button>  
    )
}

Button.propTypes = {
  onClickHandler: PropTypes.function,
  value: PropTypes.string,
  isActive: PropTypes.boolean,
}

export default Button;