import axios from 'axios';

// 创建axios实例
const service = axios.create({
  baseURL: 'http://zmallapi.99zmall.com/',
  transformRequest: [
    data => {
      return JSON.stringify(data);
    },
  ],
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000, // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error);
  },
);

// response 拦截器
service.interceptors.response.use(
  response => {
    const code = response.status;
    if (code < 200 || code > 300) {
      return Promise.reject('error');
    }
    return response.data;
  },
  error => {
    console.log(error);
  },
);
export default service;
