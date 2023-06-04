import { createContext, useContext } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

 function AuthProvider({ children }) {
  async function singIn({ email, password }){

    try {
      const response = await api.post("/sessions", { email, password });
      console.log(response)

    }catch(error){
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possível entrar")
      }

    }
  }


  return (
    <AuthContext.Provider value={{daasd:"danilo", dasda:"aaa", singIn} }>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthProvider);
  return context;
}

export { AuthProvider, useAuth };
