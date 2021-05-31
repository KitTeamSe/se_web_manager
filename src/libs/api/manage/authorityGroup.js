import qs from 'qs';
import client, { tokenHeader, checkToken } from '../client';

const URL = `authority-group`;

export const getAuthorityGroups = ({ direction, page, size, token }) => {
  const queryString = qs.stringify({ direction, page, size });
  return client
    .get(`${URL}?${queryString}`, tokenHeader(token))
    .catch(error => {
      checkToken(error);
    });
};
export const getAuthorityGroup = ({ id, token }) =>
  client.get(`${URL}/${id}`, tokenHeader(token)).catch(error => {
    checkToken(error);
  });
export const addAuthorityGroup = ({
  authorityGroupId,
  name,
  description,
  type,
  token
}) =>
  client
    .post(
      `${URL}`,
      {
        authorityGroupId,
        name,
        description,
        type
      },
      tokenHeader(token)
    )
    .catch(error => {
      checkToken(error);
    });
export const updateAuthorityGroup = ({ id, name, description, type, token }) =>
  client
    .put(
      `${URL}`,
      {
        id,
        name,
        description,
        type
      },
      tokenHeader(token)
    )
    .catch(error => {
      checkToken(error);
    });
export const removeAuthorityGroup = ({ id, token }) =>
  client.delete(`${URL}/${id}`, tokenHeader(token)).catch(error => {
    checkToken(error);
  });
