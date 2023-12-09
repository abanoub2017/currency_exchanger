// CurrencyCardGrid.js
import React from 'react';

const CurrencyCardGrid = ({ amount ,rates, popularCurrencies }) => {
  return (
    <div className="row">
      {popularCurrencies.map((currency, index) => (
        <div key={currency} className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{currency}</h5>
              <p className="card-text">
                Converted Value:  {(amount && rates) ? rates[currency] * amount : ''}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurrencyCardGrid;
