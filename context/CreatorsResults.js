{/*import React from 'react';

const CreatorsResults = ({ data }) => {
  if (!data) return null;

  return (
    <div className="creators-results-container">
      <h2>Extracted Creators Data:</h2>
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

export default CreatorsResults;*/}


import React from 'react';

const CreatorsResults = ({ data }) => {
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

export default CreatorsResults;
