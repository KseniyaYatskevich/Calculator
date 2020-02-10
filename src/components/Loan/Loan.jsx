import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonsBlock from '../ButtonsBlock/ButtonsBlock.jsx';
import BlockWithInput from '../BlockWithInput/BlockWithInput.jsx';
import './Loan.css';
import { PERIODS, CREDIT_SCORE } from '../../constants/index';


class Loan extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.inputTradeInHandler = this.inputTradeInHandler.bind(this);
    this.inputDownPaymentHandler = this.inputDownPaymentHandler.bind(this);
    this.inputAPRHandler = this.inputAPRHandler.bind(this);
    this.selectTerm = this.selectTerm.bind(this);
    this.selectCreditScore = this.selectCreditScore.bind(this);
    this.state = {
      tradeInValue: '0',
      downPaymentValue: '0',
      APR: '0',
      term: '24',
      creditScore: '750',
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

  inputAPRHandler(event) {
    if ((/^[0-9,.]+$/).test(event.target.value) && event.target.value < 100) {
      this.setState({ APR: '' });
      this.setState({ APR: event.target.value });
    }
  }

  selectTerm(value) {
    this.setState({ term: value });
  }

  selectCreditScore(value) {
    this.setState({ creditScore: value });
  }

  render() {
    const { postCode, inputPostCodeHandler } = this.props;
    return (
      <div className="loan__container">
         <BlockWithInput
          titleBlock = 'Down Payment'
          inputHandler = {this.inputTradeInHandler}
          value ={this.state.tradeInValue}
        />
        <BlockWithInput
          titleBlock = 'Trade-in Value'
          inputHandler = {this.inputDownPaymentHandler}
          value ={this.state.downPaymentValue}
        />
        <BlockWithInput
          titleBlock = 'Estimated APR'
          inputHandler = {this.inputAPRHandler}
          value ={this.state.APR}
        />
        <BlockWithInput
          titleBlock = 'Post Code'
          inputHandler = {inputPostCodeHandler}
          value ={postCode}
        />
        <ButtonsBlock
          titleBlock = 'Term (Month)'
          arrayValues = {PERIODS}
          selectValue={this.selectTerm}
          selectedValue={this.state.term}
        />
        <ButtonsBlock
          titleBlock = 'Credit Score'
          arrayValues = {CREDIT_SCORE}
          selectValue={this.selectCreditScore}
          selectedValue={this.state.creditScore}
        />
      </div>
    );
  }
}

Loan.propTypes = {
  postCode: PropTypes.string,
  inputPostCodeHandler: PropTypes.func,
};

export default Loan;
