import qs from 'qs';
import client, { tokenHeader, checkToken } from '../client';

const url = `administrator/teacher`;

export const getTeachers = ({ direction, page, size, token }) => {
  const queryString = qs.stringify({ direction, page, size });
  return client
    .get(`${url}?${queryString}`, tokenHeader(token))
    .catch(error => {
      checkToken(error);
      throw error;
    });
};
export const getTeacher = id => client.get(`${url}/${id}`);
export const addTeacher = ({ department, name, note, type, token }) =>
  client
    .post(`${url}`, { department, name, note, type }, tokenHeader(token))
    .catch(error => {
      checkToken(error);
      throw error;
    });
export const updateTeacher = () => client.put(`${url}`);
export const removeTeacher = ({ id, token }) =>
  client.delete(`${url}/${id}`, tokenHeader(token)).catch(error => {
    checkToken(error);
    throw error;
  });
