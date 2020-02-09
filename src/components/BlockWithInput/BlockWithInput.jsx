import React from 'react';
import PropTypes from 'prop-types';
import './BlockWithInput.css';
import Input from '../Input/Input'

function BlockWithInput({titleBlock, inputHandler, value}) {
  return (
    <div className="block__input">
      <h2>{titleBlock}</h2>
      <Input 
        onChangeHandler={inputHandler}
        value={value}
      />
    </div>
  )
}

BlockWithInput.propTypes = {
  titleBlock: PropTypes.string,
  inputHandler: PropTypes.func,
  value: PropTypes.string,
}

export default BlockWithInput;