// ChartComponent.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const ChartComponent = ({ historicalData }) => {
  if (!historicalData || historicalData.length === 0) {
    return <p>No historical data available.</p>;
  }

  const data = {
    labels: historicalData.map(entry => entry.date),
    datasets: [
      {
        label: 'Monthly Rate',
        data: historicalData.map(entry => ({
          x: new Date(entry.date),  // Convert date to a JavaScript Date object
          y: entry.rate,
        })),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time', // Use time scale for x-axis
        time: {
          unit: 'month', // Adjust unit based on your data
        },
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Rates',
        },
      },
    },
  };

  return (
    <div>
      <h2>Historical Data Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
