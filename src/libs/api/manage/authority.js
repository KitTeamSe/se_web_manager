import qs from 'qs';
import client, { tokenHeader, checkToken } from '../client';

const URL = `authority`;

export const getAuthoritys = ({ direction, page, size, token }) => {
  const queryString = qs.stringify({ direction, page, size });
  return client
    .get(`${URL}?${queryString}`, tokenHeader(token))
    .catch(error => {
      checkToken(error);
    });
};
export const getAuthority = ({ id, token }) =>
  client.get(`${URL}/${id}`, tokenHeader(token)).catch(error => {
    checkToken(error);
  });
