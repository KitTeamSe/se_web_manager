import qs from 'qs';
import client, { tokenHeader, checkToken } from '../client';

const URL = `tag`;

export const getTags = ({ direction, page, size, token }) => {
  const queryString = qs.stringify({ direction, page, size });
  return client
    .get(`${URL}?${queryString}`, tokenHeader(token))
    .catch(error => {
      checkToken(error);
      throw error;
    });
};
export const getTag = ({ id, token }) =>
  client.get(`${URL}/${id}`, tokenHeader(token)).catch(error => {
    checkToken(error);
    throw error;
  });
export const addTag = ({ text, token }) =>
  client.post(`${URL}`, { text }, tokenHeader(token)).catch(error => {
    checkToken(error);
    throw error;
  });
export const updateTag = ({ tagId, text, token }) =>
  client.put(`${URL}`, { tagId, text }, tokenHeader(token)).catch(error => {
    checkToken(error);
    throw error;
  });
export const removeTag = ({ id, token }) =>
  client.delete(`${URL}/${id}`, tokenHeader(token)).catch(error => {
    checkToken(error);
    throw error;
  });
