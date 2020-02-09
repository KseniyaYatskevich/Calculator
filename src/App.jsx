import React, {Component, Fragment} from 'react';
import Button from './components/Button/Button';
import Term from './components/Term/Term';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);    
    this.swichCalculatorType = this.swichCalculatorType.bind(this);
    this.selectTerm = this.selectTerm.bind(this);
    this.state = {
      calculatorType: 'Loan',
      term: '60',
    };
  }

  swichCalculatorType(value) {   
    this.setState ({calculatorType: value});      
  }

  selectTerm(value) {
    this.setState ({term: value});
    console.log(value)
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
      </Fragment>    
     
    );
  }
}

export default App;