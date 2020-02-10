import React, {Component} from 'react';
import BlockWithInput from '../BlockWithInput/BlockWithInput';
import PropTypes from 'prop-types';
import BlockWithSelectInput from '../BlockWithSelectInput/BlockWithSelectInput';
import './Lease.css';

class Lease extends Component{
  constructor(props) {
    super(props);
    this.props = props;
    this.inputTradeInHandler = this.inputTradeInHandler.bind(this);
    this.inputDownPaymentHandler = this.inputDownPaymentHandler.bind(this);
    this.inputPostCodeHandler = this.inputPostCodeHandler.bind(this);
    this.selectTerm = this.selectTerm.bind(this);
    this.selectCreditScore = this.selectCreditScore.bind(this);
    this.state = {
      tradeInValue: '0',
      downPaymentValue: '0',
      postCode: this.postCode,
      term: '36',
      creditScore: '750',
    };  
  }

  inputTradeInHandler(event) {
    this.setState({tradeInValue: ''});
    if ((/^\d+$/).test(event.target.value)) {
      this.setState({tradeInValue: event.target.value});
    }   
  }

  inputDownPaymentHandler(event) {
    this.setState({downPaymentValue: ''});
    if ((/^\d+$/).test(event.target.value)) {
      this.setState({downPaymentValue: event.target.value});
    }  
  }

  selectTerm(event) {
    this.setState({term: event.target.value});      
  }

  selectCreditScore(event) {
    this.setState({creditScore: event.target.value});
  }

  render() {
    const {postCode, inputPostCodeHandler} = this.props;
    return(
      <div className="lease__container">
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
          titleBlock = 'Post Code'
          inputHandler = {inputPostCodeHandler}
          value ={postCode}
        />
        <BlockWithSelectInput
          titleBlock = 'Term (Month)'
          step = '12'
          maxValue = '72'
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
      </div>
    )
  }
}

Lease.propTypes = {
  postCode: PropTypes.string,
  inputPostCodeHandler: PropTypes.func,
}

export default Lease;