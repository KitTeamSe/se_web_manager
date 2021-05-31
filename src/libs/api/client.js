import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = process.env.REACT_APP_API_URL;
client.defaults.crossDomain = true;
client.defaults.headers.Accept = '*/*';
client.defaults.headers.withCredentials = true;
client.defaults.headers.post['Content-Type'] = 'application/json';
client.defaults.headers['Access-Control-Allow-Origin'] = '*';
client.defaults.headers['Access-Control-Allow-Methods'] =
  'GET,PUT,POST,DELETE,PATCH,OPTIONS';
client.defaults.headers['Access-Control-Allow-Headers'] =
  'Content-Type, Authorization, Content-Length, X-Requested-With';

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export const tokenHeader = token => ({
  headers: {
    'X-AUTH-TOKEN': token
  }
});

export const checkToken = error => {
  if (
    error.response.status === 403 ||
    (error.response.status === 400 && error.response.data.code === 'GE05')
  )
    localStorage.clear();
};

export default client;
