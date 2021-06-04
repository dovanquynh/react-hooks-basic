import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";
import { DELETE_TODO } from "../reducers/types";

const TodoItem = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;

  const { dispatch } = useContext(TodoContext);
  const style = isLightTheme ? light : dark;

  return (
    <li
      style={style}
      onClick={() => dispatch({
        type: DELETE_TODO,
        payload: {
          id: data.id
        }
      })}
    >
      {data.title}
    </li>
  );
};

export default TodoItem;
