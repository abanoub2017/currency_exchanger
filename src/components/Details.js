// Details.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ConverterPanel from './ConverterPanel';
import Chart from './Chart';

const Details = () => {
  const { fromTo } = useParams();

  return (
    <div>
      <div className="mt-4 mb-2">
        {/* Display the full name of the "From" currency */}
        {/* You can add your logo or any other content here */}
      </div>
      <Link to="/">Back to Home</Link>
      <ConverterPanel fromTo={fromTo} />
      <Chart fromTo={fromTo} />
    </div>
  );
};

export default Details;
