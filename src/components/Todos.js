import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { TodoContext } from "../contexts/TodoContext";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const Todos = () => {
  const { todos, addTodo, deleteTodo } = useContext(TodoContext);

  const { isAuthenticatied } = useContext(AuthContext);

  return (
    <div className="todo-list">
      <TodoForm addTodo={addTodo} />
      {isAuthenticatied && (
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} data={todo} deleteTodo={deleteTodo} />
          ))}
        </ul>
      )}

    </div>
  );
};

export default Todos;
