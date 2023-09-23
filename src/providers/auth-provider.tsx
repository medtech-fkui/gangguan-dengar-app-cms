"use client";

import { useCookies } from "@/hooks";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import jwt from "jwt-decode";
import { axiosCore } from "@/lib/axios";

type AuthContextValue = {
  userEmail: String | undefined;
  token: String | undefined;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext({} as AuthContextValue);

const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const [userEmail, setUserEmail] = useState<String | undefined>();
  const [token, setToken] = useState<String | undefined>();

  const { getCookie, setCookie, removeCookie } = useCookies();

  const setCurrentUser = async () => {
    const token = getCookie("token");
    if (token) {
      setUserEmail((jwt(token) as any).email);
    }
  };

  const login = async (email: string, password: string) => {
    const result = await axiosCore.post("/auth/clinician", {
      email: "anggaputra@ristek.cs.ui.ac.id",
      password: "angga1212",
    });
    console.log(result);
  };

  const logout = () => {
    removeCookie("token");
  };

  useEffect(() => {
    setToken(getCookie("token"));

    if (!token && pathname !== "/") {
      router.replace("/");
      return;
    }

    if (!userEmail) {
      setCurrentUser();
    }
  }, [pathname, setUserEmail]);

  const value = {
    userEmail,
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuth };
