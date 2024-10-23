import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../lib/counter/counterSlice'; // Adjust the path to where your counterSlice is located
import { RootState } from '../lib/store'; // Import RootState from your store

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.counter.value); // Access the current counter value from the Redux store

  // Cache the counter value to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem('counterValue', value.toString());
  }, [value]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Counter: {value}</h1> {/* Display the current counter value */}
      <div className="space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(10))}
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600"
        >
          Increment by 10
        </button>
      </div>
    </div>
  );
};

export default Counter;

