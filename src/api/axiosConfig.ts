import axios, { AxiosRequestConfig, Method } from "axios";
import { notification } from "antd";
import { HTTP_STATUS_CODE } from "config/constant";

axios.interceptors.response.use(
  (response) => {
    const { status } = response;

    if (status === HTTP_STATUS_CODE.CREATED_SUCCESSFULLY) {
      notification.success({
        message: "Created Successfully",
      });
    }

    return response;
  },
  (error) => {
    notification.error({
      message: "Server error",
    });

    return error;
  }
);

const axiosConfiguration = (
  method: Method,
  options: AxiosRequestConfig = {}
) => {
  return axios({
    ...options,
    headers: {
      ...options.headers,
    },
    method,
    url: options.url,
    data: {
      ...options.data,
    },
    params: {
      ...options.params,
    },
  });
};

const sendApiWithOutPayload =
  (method: Method) =>
  (url: string, params = {}) => {
    return axiosConfiguration(method, {
      url,
      params,
    }).then((result) => ({
      status: result.status,
      data: result.data,
    }));
  };

const sendApiWithPayload =
  (method: Method) =>
  (url: string, data = {}, params = {}) => {
    return axiosConfiguration(method, {
      url,
      data,
      params,
    }).then((result) => ({
      status: result.status,
      data: result.data,
    }));
  };

const api = {
  get: sendApiWithOutPayload("get"),
  post: sendApiWithPayload("post"),
};

export default api;
