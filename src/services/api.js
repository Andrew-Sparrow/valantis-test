import axios from 'axios';
import { getHashMD5 } from '../util/util';


const BACKEND_URL = 'http://api.valantis.store:40000';

const REQUEST_TIMEOUT = 5000;


export const getAxiosInstance = () => {
  const axiosInstance = axios.create({
    method: 'post',
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'Content-Type': 'application/json',
      'X-Auth': getHashMD5()
    }
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    console.log(err.message);
  };

  axiosInstance.interceptors.response.use(onSuccess, onFail);

  return axiosInstance;
};
