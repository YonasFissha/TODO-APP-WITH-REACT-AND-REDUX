import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div className=" p-3 mt-5">
      {todos.map((todo) => {
        return (
          <TodoItem key={todo.id} id={todo.id} title={todo.name}></TodoItem>
        );
      })}
    </div>
  );
};

export default TodoList;
