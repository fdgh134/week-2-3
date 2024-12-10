import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { minusOne, plusOne } from './redux/modules/counter';

function App() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.counter.number);

  return( 
    <div>
      {number}
      <button
        onClick={() => {
          dispatch(plusOne());
       }}
      >+1</button>
      <button
        onClick={() => {
          dispatch(minusOne());
        }}
      >-1</button>
    </div>
  );
}

export default App;
