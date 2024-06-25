import React, { useState } from "react";

type Todo = {
  id: string;
  isDone: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id === id);
    setTodos(newTodos);
  };
  return (
    <>
      {todos.map(({ id }) => (
        <Todo key={id} id={id} deleteTodo={deleteTodo} />
      ))}
    </>
  );
}

function Todo({
  id,
  deleteTodo,
}: {
  id: string;
  deleteTodo: (id: string) => void;
}) {
  const handleOnClick = () => {
    deleteTodo(id);
  };
  return <div onClick={handleOnClick}></div>;
}

export default App;
