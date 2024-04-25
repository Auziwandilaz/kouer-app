// AuthContext.tsx
import { createContext } from "react";

const AuthContext = createContext({
  email: "",
  setEmail: (email: string) => {},
  password: "",
  setPassword: (password: string) => {},
  signInWithEmail: () => {},
});

export default AuthContext;
