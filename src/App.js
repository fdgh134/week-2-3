import React from 'react';
import { useSelector } from 'react-redux';

function App() {
  const counterStore = useSelector((state) => state);
  console.log(counterStore);
  return 
    <div></div>
}

export default App;
