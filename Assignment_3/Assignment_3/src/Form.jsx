import React, { useState } from 'react';

function Form() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted E-mail:', inputValue);
    setInputValue('');
  };

  return (
    <div className="flex flex-col items-center justify-center m-10">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold text-indigo-600">Form</h2>
        <input
          type="email"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter Your E-mail"
          className={`border-2 border-gray-300 rounded-md p-2 w-64 text-gray-700 focus:outline-none ${
            inputValue ? 'focus:border-green-500' : 'focus:border-red-500'
          }`}
        />
        <button
          type="submit"
          className={`bg-indigo-600 text-white py-2 px-4 rounded-md transition-colors ${
            inputValue ? 'hover:bg-green-700 cursor-pointer' : 'cursor-not-allowed'
          }`}
          disabled={!inputValue}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
