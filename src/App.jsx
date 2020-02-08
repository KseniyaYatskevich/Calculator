import React, {Component, Fragment} from 'react';
import Button from './components/Button/Button'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);    
    this.swichCalculatorType = this.swichCalculatorType.bind(this);
    this.state = {
      calculatorType: 'Loan',
    };
  }

  swichCalculatorType(value) {   
    this.setState ({calculatorType: value});      
  }

  render() {
    return (
      <Fragment>
        <Button 
          value="Loan" 
          onClickHandler={this.swichCalculatorType}
          isActive={this.state.calculatorType === 'Loan'} 
        />
        <Button
         value="Lease"
         onClickHandler={this.swichCalculatorType}
         isActive={this.state.calculatorType === 'Lease'} 
        />       
      </Fragment>    
     
    );
  }
}

export default App;