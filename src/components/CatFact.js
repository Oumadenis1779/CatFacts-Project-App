import React, { useState, useEffect } from 'react';

function CatFact() {
  const [data, setData] = useState([]);

  const fetchCatFact = () => {
    fetch('https://meowfacts.herokuapp.com/')
      .then((response) => response.json())
      .then((apiData) => {
        // Assuming the API response is an array of cat facts, update the state
        setData(apiData);
        
      })
      .catch(error => {
        console.error('Error fetching cat facts:', error);
      });
  };

  return (
    <div className="content">
      <h2>Cat Facts</h2>

      <button onClick={fetchCatFact}>Get New Facts</button>
      
      {Array.isArray(data) && data.length > 0 && (
        <ul>
          {data.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CatFact;
