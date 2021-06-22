import qs from 'qs';
import client, { tokenHeader, checkToken } from '../client';

const URL = `tag-listen`;

export const getTagListens = ({ direction, page, size, token }) => {
  const queryString = qs.stringify({ direction, page, size });
  return client
    .get(`${URL}?${queryString}`, tokenHeader(token))
    .catch(error => {
      checkToken(error);
      throw error;
    });
};
export const getTagListen = ({ id, token }) =>
  client.get(`${URL}/${id}`, tokenHeader(token)).catch(error => {
    checkToken(error);
    throw error;
  });

export const addTagListen = ({ tagId, token }) =>
  client.post(`${URL}`, { tagId }, tokenHeader(token)).catch(error => {
    checkToken(error);
    throw error;
  });

export const removeTagListen = ({ id, token }) =>
  client.delete(`${URL}/${id}`, tokenHeader(token)).catch(error => {
    checkToken(error);
    throw error;
  });

export const getTagListenByAccount = ({ id, token }) =>
  client.get(`${URL}/account/${id}`, tokenHeader(token)).catch(error => {
    checkToken(error);
    throw error;
  });

export const getMyTagListen = ({ token }) =>
  client.get(`${URL}/account/my`, tokenHeader(token)).catch(error => {
    checkToken(error);
    throw error;
  });
