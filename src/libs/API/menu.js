import axios from 'axios';
import baseUrl from '../baseUrl';

export const getMenuListApi = async () => {
  const response = await axios.get(`${baseUrl}/api/v1/menu`);
  return response;
};

export const getMenuByIdApi = async menuId => {
  const response = await axios.get(`${baseUrl}/api/v1/menu/${menuId}`);
  return response;
};

export const createMenuApi = async menuData => {
  const response = await axios.post(`${baseUrl}/api/v1/menu`, menuData);
  return response;
};
export const deleteMenuApi = async menuId => {
  const response = await axios.delete(`${baseUrl}/api/v1/menu/${menuId}`);
  return response;
};
