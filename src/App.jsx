import React, {Component, Fragment} from 'react';
import Button from './components/Button/Button';
import Term from './components/Term/Term';
import BlockWithInput from './components/BlockWithInput/BlockWithInput';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);    
    this.swichCalculatorType = this.swichCalculatorType.bind(this);
    this.selectTerm = this.selectTerm.bind(this);
    this.inputTradeInHandler = this.inputTradeInHandler.bind(this);
    this.inputDownPaymentHandlert = this.inputDownPaymentHandlert.bind(this);
    this.state = {
      calculatorType: 'Loan',
      term: '60',
      inputTradeIn: '0',
      inputDownPayment: '0',
    };
  }

  swichCalculatorType(value) {   
    this.setState ({calculatorType: value});      
  }

  selectTerm(value) {
    this.setState({term: value});
    console.log(value)
  }

  inputTradeInHandler(event) {
    this.setState({inputTradeIn: ''});
  if ((/^\d+$/).test(event.target.value)) {
    this.setState({inputTradeIn: event.target.value});
  }
    console.log('changed',this.state.inputTradeIn)
  }

  inputDownPaymentHandlert(event) {
  if ((/^\d+$/).test(event.target.value)) {
    this.setState({inputDownPayment: event.target.value});
  }
    console.log('changed', event.target.value)
  }

  render() {
    return (
      <Fragment>
        <Button 
          value="Loan" 
          onClickHandler={this.swichCalculatorType}
          isActive={this.state.calculatorType === 'Loan'} 
          buttonSize = {false}
        />
        <Button
          value="Lease"
          onClickHandler={this.swichCalculatorType}
          isActive={this.state.calculatorType === 'Lease'}
          buttonSize = {false} 
        />   
        <Term 
          selectTerm={this.selectTerm}
          selectedTerm={this.state.term}
        />
        <BlockWithInput 
          titleBlock = 'Trade-in Value'
          inputHandler = {this.inputTradeInHandler}
          value ={this.state.inputTradeIn}
        />
        <BlockWithInput 
          titleBlock = 'Down Payment'
          inputHandler = {this.inputDownPaymentHandlert}
          value ={this.state.inputDownPayment}
        />
      </Fragment>    
     
    );
  }
}

export default App;