import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import HttpService from 'services/httpServices';
import { showError } from 'helpers/toast';

const AuthenticationContext = createContext({
  token: '',
  isLogged: false,
  isLoggingOut: false,
  login: () => {},
  logout: () => {},
});

export const useAuthentication = () => useContext(AuthenticationContext);

const AuthProvider = ({ children }) => {
  //! State
  const tokenLocalStorage = HttpService.getTokenStorage();
  const [isLogged, setIsLogged] = useState(tokenLocalStorage ? true : false);
  const [token, setToken] = useState(tokenLocalStorage);
  const [isLoggingOut, setLoggingOut] = useState(false);

  const onLoginSuccess = useCallback((token) => {
    HttpService.attachTokenToHeader(token);
    HttpService.saveTokenStorage(token);
    setIsLogged(true);
    setToken(token);
  }, []);

  useEffect(() => {
    if (tokenLocalStorage) {
      //* Check if localstorage has token -> login with Token
      onLoginSuccess(tokenLocalStorage);
    }
  }, [tokenLocalStorage, onLoginSuccess]);

  //! Function
  const login = useCallback(
    ({ username, password }) => {
      return new Promise(async (resolve, reject) => {
        try {
          if (username === 'don' && password === 'don') {
            const token = 'fake token';
            onLoginSuccess(token);
          }

          resolve();
        } catch (error) {
          reject(error);
          showError(error.toString());
        }
      });
    },
    [onLoginSuccess],
  );

  const logout = useCallback(() => {
    return new Promise(async (resolve, reject) => {
      try {
        setLoggingOut(true);
        window.localStorage.clear();
        window.location.reload();
        resolve();
      } catch (error) {
        showError(error.toString());
        setLoggingOut(false);
        reject(error);
      }
    });
  }, []);

  //! Render
  const value = useMemo(() => {
    return {
      token,
      isLogged,
      isLoggingOut,
      login,
      logout,
    };
  }, [token, isLogged, login, logout, isLoggingOut]);

  return <AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>;
};

export default AuthProvider;
