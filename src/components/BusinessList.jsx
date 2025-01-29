import React from 'react';
import './BusinessList.css';

const BusinessList = () => {
  const businesses = [
    { id: 1, name: 'Bakery Bliss', category: 'Bakery' },
    { id: 2, name: 'Tech Haven', category: 'Electronics' },
    { id: 3, name: 'Green Thumb Nursery', category: 'Gardening' },
  ];

  return (
    <ul className="business-list">
      {businesses.map((business) => (
        <li key={business.id}>
          <h3>{business.name}</h3>
          <p>Category: {business.category}</p>
        </li>
      ))}
    </ul>
  );
};

export default BusinessList;