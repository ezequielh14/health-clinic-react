import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setCurrentUser(uid);
      } else {
        setCurrentUser(null);
      };
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );

};

// básicamente este contexto escucha constantemente si hay algún cambio con la autenticación y lo almacena en la variable currentUser. Por lo tanto, cada vez que se autentica un usuario, currentUserserá igual a la identificación de usuario de la autenticación de Firebase y, si no se autentica ningún usuario, esta variable es nula.