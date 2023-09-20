import Cookies from "js-cookie";

export const useCookies = () => {
  const getCookie = (key: string) => {
    return Cookies.get(key);
  };
  const setCookie = (key: string, value: string) => {
    Cookies.set(key, value);
  };

  const removeCookie = (key: string) => {
    Cookies.remove(key);
  };

  return {
    getCookie,
    setCookie,
    removeCookie,
  };
};
