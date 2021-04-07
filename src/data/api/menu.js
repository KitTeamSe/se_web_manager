import axios from 'axios';
import baseUrl from '../baseUrl';

export const getMenuList = async () => {
  const response = await axios.get(`${baseUrl}/api/vl/menu`);
  return response.data;
};

export const getMenuById = async id => {
  const response = await axios.post(`${baseUrl}/api/vl/menu/${id}`);
  return response.data;
};
