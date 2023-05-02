import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos(currentArray => [todo, ...currentArray]);
    setTodo(""); // we never modify state directly, but use modifier function
  };
  return (
    <div>
      <h1>My To Dos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          value={todo}
          onChange={onChange}
          type="text" 
          placeholder="Write your todo.."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
      {todos.map((item, index) => (
        <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
