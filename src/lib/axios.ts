import axios from "axios";

const axiosCore = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export { axiosCore };
