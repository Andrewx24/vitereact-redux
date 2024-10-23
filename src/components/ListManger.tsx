import  { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../lib/counter/listSlice'; // Import addItem action
import { RootState } from '../lib/store'; // Import RootState

const ListManager = () => {
  const [newItem, setNewItem] = useState(''); // Local state to store the new item
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.list.items); // Access the list from Redux state

  // Handle adding an item
  const handleAddItem = () => {
    if (newItem.trim()) {
      dispatch(addItem(newItem)); // Dispatch the addItem action
      setNewItem(''); // Clear the input field after adding the item
    }
  };

  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> // Render the list of items
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)} // Update the new item input
        placeholder="Add new item"
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default ListManager;
