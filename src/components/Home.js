// Home.js
import React, { useState } from 'react';
import ConverterPanel from './ConverterPanel';
import CurrencyCardGrid from './CurrencyCardGrid';

const Home = () => {
  const [amount, setAmount] = useState('');
  const [rates, setRateResult] = useState('');
  const popularCurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CNY', 'INR', 'BRL'];
  const handleRatesSubmit = (ratesSubmit) => {
    setRateResult(ratesSubmit);
  };
  const handleAmountSubmit = (submittedAmount) => {
    setAmount(submittedAmount);
  };
  return (
    <div>
      <ConverterPanel amount={amount} setAmount={setAmount} onHandleRatesSubmit={handleRatesSubmit}  onAmountSubmit={handleAmountSubmit}/>
      <CurrencyCardGrid  amount={amount}  rates={rates}  popularCurrencies={popularCurrencies}/>
    </div>
  );
};

export default Home;

