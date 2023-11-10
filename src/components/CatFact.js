import React, { useState, useEffect } from 'react';

function CatFact() {
  const [catData, setCatData] = useState({ data: [] });
  const [loading, setLoading] = useState(true);

  const fetchCatFact = () => {
    setLoading(true);
    fetch('https://meowfacts.herokuapp.com/')
      .then((response) => response.json())
      .then((apiData) => {
        setCatData({ data: apiData });
      })
      .catch(error => {
        console.error('Error fetching cat facts:', error);
        setCatData({ data: [] });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    // Fetch cat facts when the component mounts
    fetchCatFact();
  }, []);

  return (
    <div className="content">
      <h2>Cat Facts</h2>

      <button onClick={fetchCatFact} disabled={loading}>
        {loading ? 'Loading...' : 'Get New Cat Facts'}
      </button>

      <pre>{JSON.stringify(catData, null, 2)}</pre>
    </div>
  );
}

export default CatFact;
