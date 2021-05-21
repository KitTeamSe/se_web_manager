import qs from 'qs';
import client, { tokenHeader } from '../client';

const URL = `authority`;

export const getAuthoritys = ({ direction, page, size, token }) => {
  const queryString = qs.stringify({ direction, page, size });
  return client.get(`${URL}?${queryString}`, tokenHeader(token));
};
export const getAuthority = ({ id, token }) =>
  client.get(`${URL}/${id}`, tokenHeader(token));
