import { createContext, useContext, useState } from "react";

const authDetails = createContext();

function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <authDetails.Provider
      value={{
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </authDetails.Provider>
  );
}

export function useAuth() {
  return useContext(authDetails);
}

export default AuthProvider;
