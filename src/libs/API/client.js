import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = 'http://djh20.ipdisk.co.kr:7070/';
client.defaults.crossDomain = true;
client.defaults.responseType = 'json';
client.defaults.headers.Accept = '*/*';
client.defaults.headers.withCredentials = true;
client.defaults.headers['Content-Type'] = 'application/json';
client.defaults.headers['Access-Control-Allow-Origin'] = '*';
client.defaults.headers['Access-Control-Allow-Methods'] =
  'GET,PUT,POST,DELETE,PATCH,OPTIONS';

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default client;
