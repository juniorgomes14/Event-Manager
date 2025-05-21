// src/context/AuthContext.jsx
import { createContext, useContext, useState } from 'react';

// Criar o contexto
export const AuthContext = createContext(null);

// Criar o provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Aqui você pode armazenar o usuário logado

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook para facilitar o uso
export const useAuth = () => useContext(AuthContext);

/*🔐 O que o AuthContext faz na prática?
Ele:

Armazena informações do usuário logado, como name, email, token, role etc.

Permite compartilhar esses dados com qualquer componente, sem precisar passar props.

Controla o estado de login e logout da aplicação.

Permite restringir acesso a páginas (ex: mostrar páginas só para quem está logado ou é admin).*/
