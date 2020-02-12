import React, { createContext, useState, useEffect, useMemo, useContext } from 'react';

class AuthManager {
  getAuthData() {
    return ({
      username: 'felipipe',
      name: 'Andres',
      lastName: 'Molina',
    });
  }
}

const manager = new AuthManager();

export const AuthDataContext = createContext(null);

const initialAuthData = {};

const AuthDataProvider = props => {
  const [authData, setAuthData] = useState(initialAuthData);

  useEffect(() => {
    const currentAuthData = manager.getAuthData();
    if (currentAuthData) {
      setAuthData(currentAuthData);
    }
  }, []);

  const onLogout = () => setAuthData(initialAuthData);

  const onLogin = (newAuthData) => setAuthData(newAuthData);

  const authDataValue = useMemo(() => ({ ...authData, onLogin, onLogout }), [authData]);

  return <AuthDataContext.Provider value={authDataValue} {...props} />;

};

export const useAuthDataContext = (): any => useContext(AuthDataContext);

export default AuthDataProvider;