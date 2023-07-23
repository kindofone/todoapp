import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList() {
  const [numberOfIncompleteItems, setNumberOfIncompleteItems] = useState(0);
  const [items, setItems] = useState([
    {
      text: "Take out the trash",
      completed: false,
    }, 
    {
      text: "Walk the dog",
      completed: true,
    },
    ]);
  const [newTodoText, setNewTodoText] = useState("");

  const onNewTodoInputKeyUp = ({key}) => {
    if (key === "Enter" && newTodoText.trim() !== "") {
      setItems([...items, {
        text: newTodoText,
        completed: false,
      }]);
      setNewTodoText("");
    }
  };

  const onCompletedChanged = (text, completed) => {
    setItems([...items.map((item) => {
      if (item.text === text) {
        return {
          ...item,
          completed,
        };
      }

      return item;
    })]);
  };

  const onNewTodoInputChange = ({target}) => {
    setNewTodoText(target.value);
  };

  useEffect(() => {
    let count = 0;
    for (let i = 0; i < items.length; i++) {
      if (!items[i].completed) {
        count++;
      }
    }
    setNumberOfIncompleteItems(count);
  }, [items]);

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
      {items.map(({text, completed}) => (
        <TodoItem 
          key={text} 
          text={text} 
          completed={completed}
          onCompletedChanged={onCompletedChanged} 
        />
      ))} 
      {`${numberOfIncompleteItems} items left`}
    </div>
  )
}

export default TodoList;