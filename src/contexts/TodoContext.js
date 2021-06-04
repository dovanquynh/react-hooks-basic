import { createContext, useEffect, useReducer } from "react";
import { TodoReducer } from "../reducers/TodoReducer";
import { GET_TODOS, SAVE_TODO } from "../reducers/types";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  // const [todos, setTodos] = useState([]);

  const [todos, dispatch] = useReducer(TodoReducer, []);

  // useEffect
  useEffect(() => {
    dispatch({
      type: GET_TODOS,
      payload: null,
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: SAVE_TODO,
      payload: {todos}
    })
  }, [todos]);

  // const addTodo = (todo) => {
  //   setTodos([...todos, todo]);
  // };

  // const deleteTodo = (id) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };

  const TodoContextData = {
    todos,
    dispatch,
  };

  return (
    <TodoContext.Provider value={TodoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
