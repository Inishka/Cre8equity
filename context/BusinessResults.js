{/*
import React from 'react';

const BusinessResults = ({ data }) => {
  if (!data) return null;

  return (
    <div className="business-results-container">
      <h2>Extracted Business Data:</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <strong>{item.label}:</strong> {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessResults;
    
*/}

  import React from 'react';

  const BusinessResults = ({ data }) => {
    if (!data) return null;
  
    return (
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <strong>{item.label}:</strong> {item.value}
          </li>
        ))}
      </ul>
    );
  };
  
  export default BusinessResults;

 