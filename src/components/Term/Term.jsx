import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './Term.css';
// import className from 'classnames/bind';

function Term({selectTerm, selectedTerm}) {

  const periods = ['36', '48', '60', '72', '84'];

  return (
    <div className="term__container">
      <h2>Term (Months)</h2>
        {periods.map((period, index) => ( 
          <Button 
            value={period} 
            key={index} 
            onClickHandler={selectTerm}
            isActive={period === selectedTerm}
            isSmallButton = {true}
          >
          </Button>
        ))}
    </div> 
  )
}

Term.propTypes = {
  selectTerm: PropTypes.func,
  selectedTerm: PropTypes.string,
}

export default Term;