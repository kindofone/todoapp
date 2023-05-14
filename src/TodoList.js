import React from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const items = ["One", "Two", "Three"];

  return (
    <div className='todo-list'>
      {items.map(item => <TodoItem />)}
    </div>
  )
}

export default TodoList;