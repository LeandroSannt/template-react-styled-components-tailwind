import React, { createContext, useCallback, useState, useContext } from "react";

import api from "services/api";

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextState {
  user: Object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthState {
  token: string;
  user: Object;
}

interface Props {
  children: JSX.Element | JSX.Element;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider = ({ children }: Props) => {
  const keyStorage = "auth";
  const keyStorageToken = "auth:token";

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem(keyStorageToken);
    const user = localStorage.getItem(keyStorage);

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post("/sessions", {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem(keyStorageToken, token);
    localStorage.setItem(keyStorage, JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(keyStorageToken);
    localStorage.removeItem(keyStorage);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextState {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("insira o authprovider ao redor do seu elemento");
  }
  return context;
}

export { AuthProvider, useAuth };
