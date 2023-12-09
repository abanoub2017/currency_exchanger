// ConverterPanel.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ConverterPanel = ({ fromTo }) => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('EUR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [convertedResult, setConvertedResult] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    // Fetch available currencies from the Fixer API
    const fetchCurrencies = async () => {
      try {
        const response = await fetch('http://data.fixer.io/api/symbols?access_key=795686011cad62f5a089f258a60be981');
        const data = await response.json();
        const availableCurrencies = Object.keys(data.symbols);
        setCurrencies(availableCurrencies);
      } catch (error) {
        console.error('Error fetching available currencies:', error);
      }
    };

    fetchCurrencies();
  }, []);

  const fetchExchangeRates = async () => {
    try {
        setLoading(true);
      const response = await fetch(
        `https://open.er-api.com/v6/latest/${fromCurrency}`
      );
      const data = await response.json();
      const rate = data.rates[toCurrency];
      setConvertedResult((amount * rate).toFixed(2));
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
    } finally{
        setLoading(false);
    }
  };

  const handleAmountChange = (event) => {
    const value = event.target.value;

    // Validate if the entered value is a number
    if (/^\d*\.?\d*$/.test(value) || value === '') {
      setAmount(value);

      // Enable/disable conversion button based on valid amount
      const convertButton = document.getElementById('convertButton');
      if (convertButton) {
        convertButton.disabled = !value;
      }
    }
  };

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleConvert = () => {
    fetchExchangeRates();
  };

  const redirectToDetails = () => {
    history(`/details/${fromCurrency}-${toCurrency}`);
  };

  return (
    <div className="sticky-top mt-4 mb-4">
      <div className="form-group">
        <label htmlFor="amountInput">Amount:</label>
        <input
          type="text"
          className="form-control"
          id="amountInput"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="fromCurrency">From:</label>
        <select
          className="form-control"
          id="fromCurrency"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="toCurrency">To:</label>
        <select
          className="form-control"
          id="toCurrency"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className='my-3'>
      <button className="btn btn-primary " onClick={handleSwapCurrencies}>
        Swap
      </button>
      <button
        className="btn btn-success mx-3"
        onClick={handleConvert}
        id="convertButton"
        disabled={!amount || loading}
      >
         {loading ? 'Converting...' : 'Convert'}
      </button>
      <button className="btn btn-info " onClick={redirectToDetails} disabled={!convertedResult}>
        Details
      </button>
      </div>
      <div className="mt-2">
        Converted Result: {convertedResult !== null ? convertedResult : ''}
      </div>
    </div>
  );
};

export default ConverterPanel;
