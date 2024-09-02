
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../src/store" // Make sure this is the correct path
import { setValue, addType } from  "../src/counter/pizzaSlice"  // Adjust the path as needed

const Pizza = () => {
  const value = useSelector((state: RootState) => state.pizza.value);
  const types = useSelector((state: RootState) => state.pizza.types);
  const dispatch = useDispatch();

  const handleAddType = () => {
    dispatch(addType('pepperoni'));
  };

  return (
    <div>
      <h1>Current Pizza: {value}</h1>
      <h2>Types: {types.join(", ")}</h2>
      <button onClick={() => dispatch(setValue("Hawaiian Pizza"))}>
        Set Pizza Value
      </button>
      <button onClick={handleAddType}>Add Pepperoni</button>
      <button onClick={() => dispatch(addType('hawaiian'))}>Add Hawaiian</button>
        <button onClick={() => dispatch(addType('meatlovers'))}>Add Meatlovers</button>
    </div>
  );
};

export default Pizza;
