import axios from 'axios';
import baseUrl from '../baseUrl';

export const getMenuListApi = async () => {
  // const response = await axios.get(`${baseUrl}/api/vl/menu`);
  // return response.data;
  return { data: [1, 2, 3, 4, 5] };
};

export const getMenuByIdApi = async id => {
  const response = await axios.post(`${baseUrl}/api/vl/menu/${id}`);
  return response.data;
};
