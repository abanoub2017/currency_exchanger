// ConverterPanel.js
import React from 'react';

const ConverterPanel = ({ fromTo }) => {
  return (
    <div className="sticky-top mt-4 mb-4">
      {/* Your converter panel content */}
      <p>Converter Panel - {fromTo}</p>
    </div>
  );
};

export default ConverterPanel;
