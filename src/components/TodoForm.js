import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";
import { ADD_TODO } from "../reducers/types";

const TodoForm = () => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const style = isLightTheme ? light : dark;

  //Load todo context
  const { dispatch } = useContext(TodoContext);
  const [title, setTitle] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_TODO,
      payload: {
        todo: {
          id: uuidv4(),
          title
        }
      }
    })
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        onChange={onTitleChange}
        value={title}
        required
      />
      <button style={style}>Submit</button>
    </form>
  );
};

export default TodoForm;
