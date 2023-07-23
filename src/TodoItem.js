import React, {useState} from 'react';
import './TodoItem.css';

function TodoItem({text, completed, onCompletedChanged}) {
  const [checked, setChecked] = useState(completed);

  const onCheckboxClick = () => {
    setChecked(!checked);
    onCompletedChanged(text, !checked);
  }

  return (
    <div className='todo-item'>
      <input type='checkbox' checked={checked} onClick={onCheckboxClick} />
      <span className={checked && 'completed'}>{text}</span>
    </div>
  )
}

export default TodoItem;