import React from 'react';

class PaymentField extends React.Component {
  state = {
    paymentCurrency: 'BUSD',
  };

  handleCurrencyChange = (event) => {
    this.setState({ paymentCurrency: event.target.value });
  };

  render() {
    return (
      <div>
        <label htmlFor="paymentCurrency">Payment Currency:</label>
        <select
          id="paymentCurrency"
          value={this.state.paymentCurrency}
          onChange={this.handleCurrencyChange}
        >
          <option value="BUSD">BUSD</option>
          <option value="BNB">BNB</option>
        </select>
      </div>
    );
  }
}

export default PaymentField;
