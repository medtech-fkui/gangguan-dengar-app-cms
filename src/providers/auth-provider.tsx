"use client";

import { useCookies } from "@/hooks";
import { Token, User } from "@/types";
import { createContext, useState } from "react";

type AuthContextValue = {
  user: User | undefined;
  token: Token | undefined;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext({} as AuthContextValue);

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | undefined>();
  const [token, setToken] = useState<Token | undefined>();

  const { getCookie, setCookie, removeCookie } = useCookies();

  const login = (email: string, password: string) => {};

  const logout = () => {};

  const value = {
    user,
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
