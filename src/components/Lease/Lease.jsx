import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlockWithInput from '../BlockWithInput/BlockWithInput.jsx';
import BlockWithSelectInput from '../BlockWithSelectInput/BlockWithSelectInput.jsx';
import Select from '../Select/Select.jsx';
import { MILEAGES } from '../../constants/index';
import './Lease.css';

class Lease extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.inputTradeInHandler = this.inputTradeInHandler.bind(this);
    this.inputDownPaymentHandler = this.inputDownPaymentHandler.bind(this);
    this.selectTerm = this.selectTerm.bind(this);
    this.selectCreditScore = this.selectCreditScore.bind(this);
    this.selectMileagesValue = this.selectMileagesValue.bind(this);
    this.state = {
      tradeInValue: '0',
      downPaymentValue: '0',
      postCode: this.postCode,
      term: '36',
      creditScore: '750',
      miliages: '12000',
    };
  }

  inputTradeInHandler(event) {
    this.setState({ tradeInValue: '' });
    if ((/^\d+$/).test(event.target.value)) {
      this.setState({ tradeInValue: event.target.value });
    }
  }

  inputDownPaymentHandler(event) {
    this.setState({ downPaymentValue: '' });
    if ((/^\d+$/).test(event.target.value)) {
      this.setState({ downPaymentValue: event.target.value });
    }
  }

  selectTerm(event) {
    this.setState({ term: event.target.value });
  }

  selectCreditScore(event) {
    this.setState({ creditScore: event.target.value });
  }

  selectMileagesValue(event) {
    this.setState({ miliages: event.target.value });
  }

  render() {
    const { postCode, inputPostCodeHandler } = this.props;
    return (
      <div className="lease__container">
        <BlockWithInput
          titleBlock = 'Down Payment'
          inputHandler = {this.inputDownPaymentHandler}
          value ={this.state.downPaymentValue}
          />
        <BlockWithInput
          titleBlock = 'Trade-in Value'
          inputHandler = {this.inputTradeInHandler}
          value ={this.state.tradeInValue}
        />
        <BlockWithInput
          titleBlock = 'Post Code'
          inputHandler = {inputPostCodeHandler}
          value ={postCode}
        />
        <BlockWithSelectInput
          titleBlock = 'Term (Month)'
          step = '12'
          maxValue = '48'
          minValue = '12'
          onChangeHandler = {this.selectTerm}
          value = {this.state.term}
        />
        <BlockWithSelectInput
          titleBlock = 'Credit Score'
          step = '50'
          maxValue = '900'
          minValue = '600'
          onChangeHandler = {this.selectCreditScore}
          value = {this.state.creditScore}
        />
        <Select
          titleBlock="Miliages"
          arrayValues={MILEAGES}
          onChangeHandler={this.selectMileagesValue}
          value={this.state.miliages}
        />
      </div>
    );
  }
}

Lease.propTypes = {
  postCode: PropTypes.string,
  inputPostCodeHandler: PropTypes.func,
};

export default Lease;
