import React, { Component } from 'react';
import Button from './components/Button/Button.jsx';
import Lease from './components/Lease/Lease.jsx';
import Loan from './components/Loan/Loan.jsx';
import InfoCard from './components/InfoCard/InfoCard.jsx';
import { LOCATION_API_URL } from './constants/index';
import INFO_CARDS from './constants/infoCard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.locationApiURL = LOCATION_API_URL;
    this.infoCards = INFO_CARDS;
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
    this.getInfo();
  }

  async getLocation() {
    const res = await fetch(this.locationApiURL);
    const data = await res.json();
    this.setState({
      postCode: data.postal,
    });
  }

  async getInfo() {
    const res = await this.infoCards;
    const data = await res;
    this.setState({
      MSRP: data.MSRP,
      vehicleName: data.vehicleName,
      dealerName: data.dealerName,
      dealerPhoneNumber: data.dealerPhoneNumber,
      dealerRating: data.dealerRating,
    });
  }

  inputPostCodeHandler(event) {
    this.setState({ postCode: '' });
    if ((/^\d+$/).test(event.target.value)) {
      this.setState({ postCode: event.target.value });
    }
  }

  swichCalculatorType(value) {
    this.setState({ calculatorType: value });
  }

  render() {
    const isLoansCalculator = this.state.calculatorType === 'Loan';
    const { postCode } = this.state;
    return (
      <div className="app__container">
        <div className="app__container_buttons">
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
        </div>
        <div className="app__container_bolocks">
          {
            isLoansCalculator
              ? <Loan
                postCode ={postCode}
                inputPostCodeHandler={this.inputPostCodeHandler}
                msrp={this.state.MSRP}
              />
              : <Lease
                postCode ={postCode}
                inputPostCodeHandler={this.inputPostCodeHandler}
                msrp={this.state.MSRP}
              />
          }
          <InfoCard
            MSRP = {`$ ${this.state.MSRP}`}
            vehicleName={this.state.vehicleName}
            dealerName={this.state.dealerName}
            dealerPhoneNumber={this.state.dealerPhoneNumber}
            dealerRating={this.state.dealerRating}
          />
        </div>
      </div>
    );
  }
}

export default App;
