import axios from 'axios';
import baseUrl from '../baseUrl';

const option = {
  headers: {
    'content-type': 'application/json',
    'X-AUTH-TOKEN': ''
  },
  withCredentials: true,
  crossDomain: true,
  credentials: 'include'
};
export const getMenuListApi = async () => {
  const response = await axios({
    ...option,
    method: 'GET',
    url: `${baseUrl}/api/v1/menu`
  });
  return response;
};

export const getMenuByIdApi = async menuId => {
  const response = await axios({
    ...option,
    method: 'GET',
    url: `${baseUrl}/api/v1/menu/${menuId}`
  });
  return response;
};

export const createMenuApi = async menuData => {
  const response = await axios({
    ...option,
    method: 'POST',
    url: `${baseUrl}/api/v1/menu`,
    data: menuData
  });
  return response;
};

export const deleteMenuApi = async menuId => {
  const response = await axios({
    ...option,
    method: 'DELETE',
    url: `${baseUrl}/api/v1/menu/${menuId}`
  });
  return response;
};

export const updateMenuApi = async menuData => {
  const response = await axios({
    ...option,
    method: 'PUT',
    url: `${baseUrl}/api/v1/menu`,
    data: menuData
  });
  return response;
};
