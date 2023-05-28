import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList() {
  const [items, setItems] = useState([
    {
      text: "Take out the trash",
      isChecked: false,
    }, 
    {
      text: "Walk the dog",
      isChecked: true,
    },
    ]);
  const [newTodoText, setNewTodoText] = useState("");

  const onNewTodoInputKeyUp = ({key}) => {
    if (key === "Enter" && newTodoText.trim() !== "") {
      setItems([...items, {
        text: newTodoText,
        isChecked: false,
      }]);
      setNewTodoText("");
    }
  };

  const onNewTodoInputChange = ({target}) => {
    setNewTodoText(target.value);
  };

  return (
    <div className='todo-list'>
      <input 
        type='text' 
        className='new-todo-input' 
        placeholder='Text here...' 
        onKeyUp={onNewTodoInputKeyUp}
        onChange={onNewTodoInputChange}
        value={newTodoText}
      />
      {items.map(({text, isChecked}) => <TodoItem key={text} text={text} isChecked={isChecked} />)} 
    </div>
  )
}

export default TodoList;