import React, {Component, Fragment} from 'react';
import Button from './components/Button/Button';
import Lease from './components/Lease/Lease';
import Loan from './components/Loan/Loan';
// import ButtonsBlock from './components/ButtonsBlock/ButtonsBlock';
// import BlockWithInput from './components/BlockWithInput/BlockWithInput';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);    
    this.swichCalculatorType = this.swichCalculatorType.bind(this);
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

  render() {
    const isLoansCalculator = this.state.calculatorType === 'Loan';
    return (
      <Fragment>
        <Button 
          value="Loan" 
          onClickHandler={this.swichCalculatorType}
          isActive={isLoansCalculator} 
          buttonSize = {false}
        />
        <Button
          value="Lease"
          onClickHandler={this.swichCalculatorType}
          isActive={!isLoansCalculator}
          buttonSize = {false} 
        />
        {isLoansCalculator ? <Loan /> : <Lease />}
      </Fragment>       
    );
  }
}

export default App;