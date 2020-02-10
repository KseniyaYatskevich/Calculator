import React, {Component, Fragment} from 'react';
import Button from './components/Button/Button';
import Lease from './components/Lease/Lease';
import Loan from './components/Loan/Loan';
import {LOCATION_API_URL} from './constants/index';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props); 
    this.locationApiURL = LOCATION_API_URL;   
    this.swichCalculatorType = this.swichCalculatorType.bind(this);
    this.inputPostCodeHandler = this.inputPostCodeHandler.bind(this);
    this.state = {
      calculatorType: 'Loan',
      term: '60',
      inputTradeIn: '0',
      inputDownPayment: '0',
      postCode: '',
    };
  }

  componentDidMount() {
    this.getLocation();
  }

  async getLocation() {
    const res = await fetch(this.locationApiURL);
    const data = await res.json();
    console.log(data)
    this.setState({
      postCode: data.postal,
    })       
  }

  inputPostCodeHandler(event) {
    this.setState({ postCode:'', });
    if ((/^\d+$/).test(event.target.value)) {
      this.setState({postCode: event.target.value});
      console.log(event.target.value)
    } 
  }

  swichCalculatorType(value) {   
    this.setState ({calculatorType: value});      
  }

  render() {
    const isLoansCalculator = this.state.calculatorType === 'Loan';
    const {postCode} = this.state;
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
        {
          isLoansCalculator 
            ? <Loan 
              postCode ={postCode}
              inputPostCodeHandler={this.inputPostCodeHandler}
            /> 
            : <Lease 
              postCode ={postCode}
              inputPostCodeHandler={this.inputPostCodeHandler}
            />
        }
      </Fragment>       
    );
  }
}

export default App;