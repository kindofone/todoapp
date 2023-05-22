import React, {useState} from 'react';
import './TodoItem.css';

function TodoItem() {
  const [text, setText] = useState("Take out the trash");
  const [checked, setChecked] = useState(false);
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