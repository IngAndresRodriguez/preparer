import axios from 'axios';

export const preparerAPI = axios.create({
  baseURL: 'http://192.168.102.24:14480/api'
})