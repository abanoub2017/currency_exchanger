// CurrencyCard.js
import React from 'react';

const CurrencyCard = ({ currency, convertedValue }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{currency}</h5>
        <p className="card-text">Converted Value: {convertedValue !== null ? convertedValue : 'N/A'}</p>
      </div>
    </div>
  );
};

export default CurrencyCard;
