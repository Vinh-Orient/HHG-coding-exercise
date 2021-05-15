import api from "./axiosConfig";

const HOST = process.env.REACT_APP_API_HOST;

console.log("HOST :>> ", HOST);

const get = (url: string, params = {}) => {
  return api.get(`${HOST}/${url}`, params);
};
const post = (url: string, data = {}, params = {}) => {
  return api.post(`${HOST}/${url}`, data, params);
};

export { get, post };
