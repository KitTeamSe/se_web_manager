import qs from 'qs';
import client, { tokenHeader, checkToken } from '../client';

const URL = `authority-group-authority`;
export const getAuthorityMappings = ({ direction, page, size, token }) => {
  const queryString = qs.stringify({ direction, page, size });
  return client
    .get(`${URL}?${queryString}`, tokenHeader(token))
    .catch(error => {
      checkToken(error);
      throw error;
    });
};

export const getAuthorityMapping = ({ id, token }) =>
  client.get(`${URL}/${id}`, tokenHeader(token)).catch(error => {
    checkToken(error);
    throw error;
  });

export const addAuthorityMapping = ({ authorityId, groupId, token }) =>
  client
    .post(
      `${URL}`,
      {
        authorityId,
        groupId
      },
      tokenHeader(token)
    )
    .catch(error => {
      checkToken(error);
      throw error;
    });

export const removeAuthorityMapping = ({ id, token }) =>
  client.delete(`${URL}/${id}`, tokenHeader(token)).catch(error => {
    checkToken(error);
    throw error;
  });
