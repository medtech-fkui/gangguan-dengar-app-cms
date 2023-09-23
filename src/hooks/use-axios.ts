import { useEffect } from "react";
import { useCookies } from ".";
import axios from "@/lib/axios";

export const useAxios = () => {
  const { getCookie } = useCookies();

  useEffect(() => {
    const token = getCookie("token");
    const requestIntercept = axios.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    return () => {
      axios.interceptors.request.eject(requestIntercept);
    };
  }, [getCookie]);

  return axios;
};
