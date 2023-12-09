// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import ConverterPanel from './ConverterPanel';
// import Chart from './Chart';

// const Details = () => {
//   const [amount, setAmount] = useState('');

//   const handleAmountSubmit = (submittedAmount) => {
//     setAmount(submittedAmount);
//   };

//   return (
//     <div>
//       <div className="mt-4 mb-2">
// =      </div>
//       <Link to="/">Back to Home</Link>
//       <ConverterPanel amount={amount} setAmount={setAmount} onAmountSubmit={handleAmountSubmit} />
//       <Chart />
//     </div>
//   );
// };

// export default Details;

// Details.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ConverterPanel from './ConverterPanel';
// import ChartComponent from './Chart';

const Details = () => {
  const [amount, setAmount] = useState('');
  const [historicalData, setHistoricalData] = useState([]);
  
  const handleRatesSubmit = (ratesSubmit) => {
    // Assuming ratesSubmit contains historical data for the selected currencies
    setHistoricalData(ratesSubmit);
  };

  const handleAmountSubmit = (submittedAmount) => {
    setAmount(submittedAmount);
  };

  return (
    <div>
      <div className="mt-4 mb-2">
        {/* Additional content if needed */}
      </div>
      <Link to="/">Back to Home</Link>
      <ConverterPanel
        amount={amount}
        setAmount={setAmount}
        onHandleRatesSubmit={handleRatesSubmit}
        onAmountSubmit={handleAmountSubmit}
      />
      {/* <ChartComponent historicalData={historicalData} /> */}
    </div>
  );
};

export default Details;
