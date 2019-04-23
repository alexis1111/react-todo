import React from 'react';
import './Item.scss';

const Item = (props) => {
  let renderData = (
    <li className="task-item custom-control custom-checkbox" onClick={props.completeTask}>
      <input type="checkbox" className="custom-control-input" id={props.id}/>
      <label htmlFor={props.id} className="custom-control-label">
        { props.description }
      </label>
    </li>
  )

  if (props.completed) {
    renderData = (
      <li className="task-item task-item--completed" onClick={props.deleteTask}>
        <button type="button" className="task-item__close-btn"> &#x2715;</button>
        { props.description }
      </li>
    );
  }

  return renderData;
}

export default Item;