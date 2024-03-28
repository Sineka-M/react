// InputArea.js
import React, { useState } from 'react';
import './ToDoItem';

function InputArea({ addItems }) {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddItem = () => {
    addItems(inputText);
    setInputText("");
  };

  return (
    <div className="form">
      <input type="text" onChange={handleChange} value={inputText} />
      <button onClick={handleAddItem}>
        Add
      </button>
    </div>
  );
}

export default InputArea;
