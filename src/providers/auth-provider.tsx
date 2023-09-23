"use client";

import { useCookies } from "@/hooks";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import jwt from "jwt-decode";
import toast from "react-hot-toast";
import axios from "@/lib/axios";

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

  const setCurrentUser = () => {
    const token = getCookie("token");
    if (token) {
      setUserEmail((jwt(token) as any).email);
    }
  };

  const login = async (email: string, password: string) => {
    const promise = axios.post("/auth/clinician", {
      email: email,
      password: password,
    });

    toast.promise(promise, {
      loading: "Finding you're account...",
      success: "Your'e successfully logged in!",
      error: "Something went wrong",
    });

    await promise
      .then((res) => {
        setCookie("token", res.data.token as string);
        setCurrentUser();
      })
      .finally(() => {
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
  };

  const logout = () => {
    removeCookie("token");
    toast.success("Successfully logged out!");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  useEffect(() => {
    const token = getCookie("token");
    setToken(token);

    if (!token || token === "undefined") {
      if (pathname !== "/") {
        router.replace("/");
      }
      return;
    }

    if (token && pathname === "/") {
      router.replace("/users");
    }
  }, [pathname]);

  const value = {
    userEmail,
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuth };
