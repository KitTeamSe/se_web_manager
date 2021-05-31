import qs from 'qs';
import client, { tokenHeader, checkToken } from '../client';

const URL = `authority-group-account`;
export const getAccountMappings = ({ direction, page, size, token }) => {
  const queryString = qs.stringify({ direction, page, size });
  return client
    .get(`${URL}?${queryString}`, tokenHeader(token))
    .catch(error => {
      checkToken(error);
      throw error;
    });
};

export const getAccountMapping = ({ id, token }) =>
  client.get(`${URL}/${id}`, tokenHeader(token)).catch(error => {
    checkToken(error);
    throw error;
  });

export const addAccountMapping = ({ accountId, groupId, token }) =>
  client
    .post(
      `${URL}`,
      {
        accountId,
        groupId
      },
      tokenHeader(token)
    )
    .catch(error => {
      checkToken(error);
      throw error;
    });

export const removeAccountMapping = ({ id, token }) =>
  client.delete(`${URL}/${id}`, tokenHeader(token)).catch(error => {
    checkToken(error);
    throw error;
  });
