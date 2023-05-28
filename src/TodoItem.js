import React, {useState} from 'react';
import './TodoItem.css';

function TodoItem({text, isChecked}) {
  const [checked, setChecked] = useState(isChecked);

  const onCheckboxClick = () => {
    setChecked(!checked);
  }

  return (
    <div className='todo-item'>
      <input type='checkbox' checked={checked} onClick={onCheckboxClick} />
      <span className={checked && 'completed'}>{text}</span>
    </div>
  )
}

export default TodoItem;