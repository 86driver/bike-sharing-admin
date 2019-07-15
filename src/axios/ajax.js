import axios from "axios";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Modal } from 'antd'

NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

const baseUrl = 'https://www.easy-mock.com/mock/5d2c84c03ad99414830a740d/mockapi'

const ajax = axios.create({
  baseURL: baseUrl,
  timeout: 500,
  withCredentials: true,
  headers: {
    //"Origin":'https://nihaotime.com/knowledgeManager'
  }
});

//请求拦截器
ajax.interceptors.request.use(
  config => {
    NProgress.start()
    return config;
  },
  err => {
    NProgress.start()
    return Promise.reject(err);
  }
);

//响应拦截器
ajax.interceptors.response.use(
  res => {
    NProgress.done()
    if (res.data.code === 0) {
      return res.data
    }
    if (res.data.code !== 0) {
      Modal.info({
        title: '提示',
        content: res.data.msg
      })
    }
  },
  err => {
    NProgress.done()
    return Promise.reject(err);
  }
);

export default ajax;