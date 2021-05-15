import api from "./axiosConfig";

const HOST =
  process.env.API_HOST || "https://609eb050c290190017f104d6.mockapi.io/api";

const get = (url: string, params = {}) => {
  return api.get(`${HOST}/${url}`, params);
};
const post = (url: string, data = {}, params = {}) => {
  return api.post(`${HOST}/${url}`, data, params);
};

export { get, post };
