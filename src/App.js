import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoAction";
import "./App.css";

function App() {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const submitHandler = (e) => {    
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };

  const onChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>To Do List in React App</h2>
        <form onSubmit={submitHandler}>
          <input
            className="input"
            placeholder="Enter the Data"
            onChange={onChangeHandler}
          />
          <button className="button btnSubmit">Submit</button>
        </form>
        <ul className="todocss">
          {todos &&
            todos.map((t) => (
              <li key={t.id} className="tododetails">
                <span className="todotext">{t.todo}</span>
                <button
                  className="button btnDelete"
                  onClick={() => removeHandler(t)}
                >
                  X
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
