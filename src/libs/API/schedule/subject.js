import qs from 'qs';
import client, { tokenHeader } from '../client';

const url = `administrator/subject`;

export const getSubjects = ({ direction, page, size, token }) => {
  const queryString = qs.stringify({ direction, page, size });
  return client.get(`${url}?${queryString}`, tokenHeader(token));
};
export const getSubject = id => client.get(`${url}/${id}`);
export const addSubject = () => client.post(`${url}`);
export const updateSubject = () => client.put(`${url}`);
export const removeSubject = id => client.delete(`${url}/${id}`);
