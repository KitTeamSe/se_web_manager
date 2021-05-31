import qs from 'qs';
import client, { tokenHeader, checkToken } from '../client';

const URL = `blacklist`;
export const getBlacklists = ({ direction, page, size, token }) => {
  const queryString = qs.stringify({ direction, page, size });
  return client
    .get(`${URL}?${queryString}`, tokenHeader(token))
    .catch(error => {
      checkToken(error);
    });
};

export const getBlacklist = ({ id, token }) =>
  client.get(`${URL}/${id}`, tokenHeader(token)).catch(error => {
    checkToken(error);
  });

export const addBlacklist = ({ ip, reason, token }) =>
  client
    .post(
      `${URL}`,
      {
        ip,
        reason
      },
      tokenHeader(token)
    )
    .catch(error => {
      checkToken(error);
    });

export const removeBlacklist = ({ id, token }) =>
  client.delete(`${URL}/${id}`, tokenHeader(token)).catch(error => {
    checkToken(error);
  });
