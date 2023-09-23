import { useEffect } from "react";
import { useCookies } from ".";
import { axiosCore } from "@/lib/axios";

export const useAxios = () => {
  const { getCookie } = useCookies();

  useEffect(() => {
    const token = getCookie("token");
    const requestIntercept = axiosCore.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    return () => {
      axiosCore.interceptors.request.eject(requestIntercept);
    };
  }, [getCookie]);

  return axiosCore;
};
