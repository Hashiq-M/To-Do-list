import { useState } from "react";

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [newtasks, setNewtasks] = useState("");
  function eventChange(event) {
    setNewtasks(event.target.value);
  }
  function addTask() {
    if (newtasks.trim() !== "") {
      setTasks((t) => [...t, newtasks]);
      setNewtasks("");
    }
  }
  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }
  function moveUp(index) {
    const updateTask = [...tasks];
    if (index > 0) {
      [updateTask[index], updateTask[index - 1]] = [
        updateTask[index - 1],
        updateTask[index],
      ];
    }
    setTasks(updateTask);
  }
  function moveDown(index) {
    const updateTask = [...tasks];
    if (index < tasks.length - 1) {
      [updateTask[index], updateTask[index + 1]] = [
        updateTask[index + 1],
        updateTask[index],
      ];
    }
    setTasks(updateTask);
  }
  return (
    <div className="container">
      <h1>TO DO LIST</h1>
      <div>
        <input
          value={newtasks}
          placeholder="Enter a task"
          type="text"
          onChange={eventChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <center>
        {" "}
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                onClick={() => deleteTask(index)}
                className="delete-button"
              >
                Delete
              </button>
              <button onClick={() => moveUp(index)} className="move-button">
                👆
              </button>
              <button onClick={() => moveDown(index)} className="move-button">
                👇
              </button>
            </li>
          ))}
        </ol>
      </center>
    </div>
  );
}
export default ToDo;
