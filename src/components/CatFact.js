import React, { useState } from 'react';

function CatFact() {
  const [fact, setFact] = useState('');

  const fetchCatFact = async () => {
    try {
      const response = await fetch('https://meowfacts.herokuapp.com/');
      if (response.ok) {
        const data = await response.json();
        const catFact = data.data;
        console.log(catFact); // You can handle the catFact data as needed (e.g., updating state in a React component)
      } else {
        console.error('Failed to fetch cat fact');
      }
    } catch (error) {
      console.error('Error fetching cat fact:', error);
    }
  };
  
  // Call the fetchCatFact function to fetch a cat fact
  fetchCatFact();
  

  return (
    <div className="content">
      <h2>Cat Fact</h2>
      <button onClick={fetchCatFact}>Get New Fact</button>
      {fact && <p>{fact}</p>}
    </div>
  );
}

export default CatFact;
