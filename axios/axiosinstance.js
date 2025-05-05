import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const axiosinstance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  timeout: 5000,
});

axiosinstance.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("token");
    if (token) {
      request.headers["Authorization"] = token;
    }
    return request;
  },
  (error) => Promise.reject(error)
);

axiosinstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosinstance;
