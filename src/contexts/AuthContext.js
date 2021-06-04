import { createContext, useEffect, useReducer } from "react";
import { AuthReducer } from "../reducers/AuthReducer";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // const [isAuthenticatied, setAuthentication] = useState(false);

  const [isAuthenticatied, dispatch] = useReducer(AuthReducer, false)

  // const toggleAuth = () => {
  //   setAuthentication(!isAuthenticatied);
  // };

  const AuthContextData = {
    isAuthenticatied,
    dispatch,
  };

  useEffect(() => {
    alert(isAuthenticatied ? 'Login successfully' : 'You are logged out. Please login!')
  }, [isAuthenticatied])

  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthContextProvider;
