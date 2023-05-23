import PaymentField from './components/PaymentField';
import MetamaskButton from './components/MetamaskButton';
import React from 'react';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <PaymentField />
    <MetamaskButton  />
  </div>
);

export default App;
