import React, { useState } from 'react';

function ToDoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(props.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    props.editItem(props.id, editText);
    setIsEditing(false);
  };

  const handleChange = (event) => {
    setEditText(event.target.value);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input type="text" value={editText} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{props.text}</span>
          <button onClick={handleEdit}> Edit   </button>
          <button onClick={() => props.deleteItem(props.id)}>   Delete  </button>
        </>
      )}
    </li>
  );
}

export default ToDoItem;

