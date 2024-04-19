import { useState } from "react";
import { Form } from "./Components/Form";
import { ListTodo } from "./Components/ListTodo";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState([{ title: "test", complete: false, id: 1 }]);

  const addTodo = (title) => {
    const id = todo.length > 0 ? Math.max(...todo.map((todo) => todo.id)) : 0;
    const newTodo = {
      title,
      complete: false,
      id: id + 1,
    };

    setTodo((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((todoItem) => todoItem.id !== id));
  };

  const toggleComplete = (id) => {
    setTodo((prev) =>
      prev.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, complete: !todoItem.complete }
          : todoItem
      )
    );
  };

  const handleReset = () => {
    setTodo([]);
  };

  return (
    <div className="Body">
      <div className="App">
        <Form add={addTodo} />
        <button onClick={handleReset}>Reset</button>
        <ListTodo
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
};

export default App;
