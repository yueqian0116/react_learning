import { useState } from "react";
import "../styling/TodoList.css";

const TodoList = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (text.trim() === "") return;
    setTasks([...tasks, text]);
    setText("");
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div>
      <div className="todo-container">
        <h1>Todo List</h1>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Write task here"
            aria-label="Write task here"
            aria-describedby="button-addon2"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={addTask}
          >
            Add
          </button>
        </div>
        {tasks.length === 0 && <p>No tasks to do</p>}
        <ul className="list-group mb-3">
          {tasks.map((task, index) => {
            return (
              <li key={index} className="list-group-item">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id={`check-${index}`}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`check-${index}`}
                  >
                    {task}
                  </label>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-primary"
            type="button"
            onClick={clearTasks}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
