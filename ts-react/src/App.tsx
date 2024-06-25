import React, { useState } from "react";
import "./App.css";

type Todo = {
  id: string;
  title: string;
  isDone: boolean;
};

type TodoList = Todo[];

const mockTodo: Todo = {
  id: crypto.randomUUID(),
  title: "리액트",
  isDone: false,
};

const todoList: TodoList = [mockTodo];

function App() {
  const [stateTodoList, setTodoList] = useState<TodoList>([]);

  const [title, setTitle] = useState("");

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onClick = () => {
    if (title === "") {
      return;
    }
    setTodoList((prev) => [
      ...prev,
      { title, id: crypto.randomUUID(), isDone: false },
    ]);
    setTitle("");
  };

  const onDeleteClick = (id: Todo["id"]) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

    const oToggleClick = (id: Todo["id"]) => {
      setTodoList((prev)=>prev.map((todo)=>todo.id===id?{...todo,isDone: !todo.isDone}) : todo)
    };

  return (
    <>
      {stateTodoList.map(({ id, title, isDone }) => {
        return (
          <div onClick={() => {

          }}>
            <h1>{mockTodo.title}</h1>

          </div>
        );
      })}
      <input type="text" value={title} onChange={onTitleChange} />
      <button onClick={onclick}>등록하기</button>
    </>
  );
}

export default App;
