import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../lib/counter/counterSlice'; // Adjust the path to where your counterSlice is located
import { RootState } from '../lib/store'; // Import RootState from your store

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.counter.value); // Access the current counter value from the Redux store

  return (
    <div>
      <h1>Counter: {value}</h1> {/* Display the current counter value */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
