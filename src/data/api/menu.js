import axios from 'axios';
import baseUrl from '../baseUrl';

export const getMenuListApi = async () => {
  console.log(baseUrl);
  const response = await axios({
    method: 'get',
    url: `${baseUrl}/api/vl/menu`
  });
  return response.data;
};

export const getMenuByIdApi = async id => {
  const response = await axios.post(`${baseUrl}/api/vl/menu/${id}`);
  return response.data;
};
