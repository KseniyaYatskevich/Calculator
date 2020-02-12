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
    this.setMonthlyPaymentLease = this.setMonthlyPaymentLease.bind(this);
    this.selectCreditScore = this.selectCreditScore.bind(this);
    this.selectMileagesValue = this.selectMileagesValue.bind(this);
    this.state = {
      tradeInValue: '0',
      downPaymentValue: '0',
      postCode: this.postCode,
      term: '36',
      creditScore: '750',
      miliages: '12000',
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

  selectTerm(event) {
    this.setState({ term: event.target.value });
  }

  selectCreditScore(event) {
    this.setState({ creditScore: event.target.value });
  }

  selectMileagesValue(event) {
    this.setState({ miliages: event.target.value });
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

  // eslint-disable-next-line class-methods-use-this
  calculatTaxes(postCode) {
    return postCode.split('').map((num) => num * 11);
  }

  async calculateMonthlyPaymentLease() {
    // eslint-disable-next-line max-len
    const monthlyPaymentLease = (((this.props.msrp - this.state.tradeInValue - this.state.downPaymentValue) * this.state.miliages) / (10000 * this.state.term)) * this.state.creditScoreValue;
    return Promise.resolve(monthlyPaymentLease);
  }

  async setMonthlyPaymentLease() {
    const res = await this.calculateMonthlyPaymentLease();
    this.setState({
      monthlyPaymentLease: res,
    });
  }

  render() {
    const { postCode, inputPostCodeHandler } = this.props;
    return (
      <div className="lease__container">
        <BlockWithInput
          titleBlock = 'Down Payment'
          inputHandler = {this.inputDownPaymentHandler}
          value ={this.state.downPaymentValue}
          onBlurHandler={this.setMonthlyPaymentLease}
          />
        <BlockWithInput
          titleBlock = 'Trade-in Value'
          inputHandler = {this.inputTradeInHandler}
          value ={this.state.tradeInValue}
          onBlurHandler={this.setMonthlyPaymentLease}
        />
        <BlockWithInput
          titleBlock = 'Post Code'
          inputHandler = {inputPostCodeHandler}
          value ={postCode}
          onBlurHandler={this.setMonthlyPaymentLease}
        />
        <BlockWithSelectInput
          titleBlock = 'Term (Month)'
          step = '12'
          maxValue = '48'
          minValue = '12'
          onChangeHandler = {this.selectTerm}
          onBlurHandler={this.setMonthlyPaymentLease}
          value = {this.state.term}
        />
        <BlockWithSelectInput
          titleBlock = 'Credit Score'
          step = '50'
          maxValue = '900'
          minValue = '600'
          onChangeHandler = {this.selectCreditScore}
          value = {this.state.creditScore}
          onBlurHandler={this.setMonthlyPaymentLease}
        />
        <Select
          titleBlock="Miliages"
          arrayValues={MILEAGES}
          onChangeHandler={this.selectMileagesValue}
          value={this.state.miliages}
          onBlurHandler={this.setMonthlyPaymentLease}
        />
        <h3>Taxes</h3>
        <p>{this.calculatTaxes(postCode)}</p>
        <h3>Monthly Payment</h3>
        <p>{`$ ${Math.round(this.state.monthlyPaymentLease)}`}</p>
      </div>
    );
  }
}

Lease.propTypes = {
  postCode: PropTypes.string,
  inputPostCodeHandler: PropTypes.func,
  msrp: PropTypes.string,
};

export default Lease;
