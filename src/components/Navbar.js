import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { TOGGLE_AUTH } from "../reducers/types";

const Navbar = () => {
  const { theme } = useContext(ThemeContext)
  const { isLightTheme, light, dark } = theme
  const style = isLightTheme ? light : dark

  const { isAuthenticatied, dispatch } = useContext(AuthContext)

  return (
    <div className="navbar" style={style}>
      <h1>My App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          {isAuthenticatied ? 'You are logged in' : ''}
          <button
            onClick={() => dispatch({
              type: TOGGLE_AUTH
            })}
          >{isAuthenticatied ? 'Logout' : 'Login'}</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
