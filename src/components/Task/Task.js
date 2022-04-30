import React from "react";
import './Task.css'

const Task = (props) => {
  return (
    <div className="task">
      <h2 className="task__description">{props.data}</h2>
      {console.log(props.data)}
    </div>
  );
};

export default Task;
