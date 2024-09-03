import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../src/store'; // Ensure this is the correct path
import { setValue, addType } from '../src/counter/nameSlice';

const Namelist: React.FC = () => {
    const value = useSelector((state: RootState) => state.name.value);
    const types = useSelector((state: RootState) => state.name.types);
    const dispatch = useDispatch();

    const [newType, setNewType] = useState<string>(''); // State to handle new name input

    const handleAddType = () => {
        if (newType.trim()) {
            dispatch(addType(newType.trim()));
            setNewType(''); // Clear the input after adding
        }
    };

    const handleSetValue = (newValue: string) => {
        dispatch(setValue(newValue));
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Namelist</h2>
            <div className="mb-4">
                <p className="text-lg text-gray-700">Value: {value}</p>
                <p className="text-lg font-semibold text-gray-700 mt-2">Types:</p>
                <ul className="list-disc list-inside ml-4">
                    {types.map((type, index) => (
                        <li key={index} className="text-gray-600">{type}</li>
                    ))}
                </ul>
            </div>
            <input
                type="text"
                value={newType}
                onChange={(e) => setNewType(e.target.value)}
                placeholder="Enter a name"
                className="px-4 py-2 border rounded mb-4"
            />
            <button
                onClick={handleAddType}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
                Add Type
            </button>
        </div>
    );
};

export default Namelist;
