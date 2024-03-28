// App.js
import React, { useState } from 'react';
import './App.css';
import InputArea from './components/InputArea';
import ToDoItem from './components/ToDoItem';

function App() {
  const [items, setItems] = useState([]);

  const addItems = (inputText) => {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  const editItem = (id, newText) => {
    setItems((prevItems) => {
      return prevItems.map((item, index) => {
        if (index === id) {
          return newText;
        }
        return item;
      });
    });
  };

  return (
    <div className="container">
      <div className='heading'>
        <h1>To-Do List</h1>
      </div>
      <InputArea addItems={addItems} />
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem key={index} text={item} deleteItem = {() => deleteItem(index)} editItem= {editItem}  id={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
