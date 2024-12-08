import React from 'react';
import Table from './Table';

const App = () => {
  const data = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'San Francisco' },
    { name: 'Charlie', age: 35, city: 'Los Angeles' },
  ];

  const columns = ['name', 'age', 'city'];

  return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Sortable Table</h1>
        <Table data={data} columns={columns} />
      </div>
  );
};

export default App;
