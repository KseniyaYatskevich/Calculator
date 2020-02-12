/* eslint-disable max-len */
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
    this.setMonthlyPaymentLoan = this.setMonthlyPaymentLoan.bind(this);
    this.selectCreditScore = this.selectCreditScore.bind(this);
    this.state = {
      tradeInValue: '0',
      downPaymentValue: '0',
      APR: '0',
      term: '24',
      creditScore: '750',
      creditScoreValue: '0.95',
      monthlyPaymentLoan: '0',
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
    this.setState({ APR: '' });
    if ((/^[0-9,.]+$/).test(event.target.value) && event.target.value < 100) {
      this.setState({ APR: event.target.value });
    }
  }

  calculatecreditScoreValue() {
    if (this.state.creditScore >= 750) {
      this.setState({ creditScoreValue: '0.95' });
    } else if (this.state.creditScore < 750 && this.state.creditScore >= 700) {
      this.setState({ creditScoreValue: '1' });
    } else if (this.state.creditScore < 700 && this.state.creditScore >= 640) {
      this.setState({ creditScoreValue: '1.05' });
    } else this.setState({ creditScoreValue: '1.2' });
  }


  async calculateMonthlyPaymentLoan() {
    const monthlyPaymentLoan = ((this.props.msrp - this.state.tradeInValue - this.state.downPaymentValue) * this.state.creditScoreValue * this.state.APR) / this.state.term;
    return Promise.resolve(monthlyPaymentLoan);
  }

  async setMonthlyPaymentLoan() {
    const res = await this.calculateMonthlyPaymentLoan();
    this.setState({
      monthlyPaymentLoan: res,
    });
  }

  selectTerm(value) {
    this.setState({ term: value });
  }

  // eslint-disable-next-line class-methods-use-this
  calculatTaxes(postCode) {
    return postCode.split('').map((num) => num * 11);
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
          inputHandler = {this.inputDownPaymentHandler}
          value ={this.state.downPaymentValue}
          onBlurHandler={this.setMonthlyPaymentLoan}
          />
        <BlockWithInput
          titleBlock = 'Trade-in Value'
          inputHandler = {this.inputTradeInHandler}
          value ={this.state.tradeInValue}
          onBlurHandler={this.setMonthlyPaymentLoan}
        />
        <BlockWithInput
          titleBlock = 'Estimated APR'
          inputHandler = {this.inputAPRHandler}
          value ={this.state.APR}
          onBlurHandler={this.setMonthlyPaymentLoan}
        />
        <BlockWithInput
          titleBlock = 'Post Code'
          inputHandler = {inputPostCodeHandler}
          value ={postCode}
          onBlurHandler={this.setMonthlyPaymentLoan}
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
        <h3>Taxes</h3>
        <p>{this.calculatTaxes(postCode)}</p>
        <h3>Monthly Payment</h3>
        <p>{`$ ${Math.round(this.state.monthlyPaymentLoan)}`}</p>
      </div>
    );
  }
}

Loan.propTypes = {
  postCode: PropTypes.string,
  inputPostCodeHandler: PropTypes.func,
  msrp: PropTypes.string,
};

export default Loan;
