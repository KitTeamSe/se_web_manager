import qs from 'qs';
import client, { tokenHeader } from '../client';

const url = `administrator/teacher`;

export const getTeachers = ({ direction, page, size, token }) => {
  const queryString = qs.stringify({ direction, page, size });
  return client.get(`${url}?${queryString}`, tokenHeader(token));
};
export const getTeacher = id => client.get(`${url}/${id}`);
export const addTeacher = ({ department, name, note, type, token }) =>
  client.post(`${url}`, { department, name, note, type }, tokenHeader(token));
export const updateTeacher = () => client.put(`${url}`);
export const removeTeacher = id => client.delete(`${url}/${id}`);
