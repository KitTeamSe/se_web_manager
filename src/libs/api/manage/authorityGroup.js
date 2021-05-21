import qs from 'qs';
import client, { tokenHeader } from '../client';

const URL = `authority-group`;

export const getAuthorityGroups = ({ direction, page, size, token }) => {
  const queryString = qs.stringify({ direction, page, size });
  return client.get(`${URL}?${queryString}`, tokenHeader(token));
};
export const getAuthorityGroup = ({ id, token }) =>
  client.get(`${URL}/${id}`, tokenHeader(token));
export const addAuthorityGroup = ({
  authorityGroupId,
  name,
  description,
  type,
  token
}) =>
  client.post(
    `${URL}`,
    {
      authorityGroupId,
      name,
      description,
      type
    },
    tokenHeader(token)
  );
export const updateAuthorityGroup = ({ id, name, description, type, token }) =>
  client.put(
    `${URL}`,
    {
      id,
      name,
      description,
      type
    },
    tokenHeader(token)
  );
export const removeAuthorityGroup = ({ id, token }) =>
  client.delete(`${URL}/${id}`, tokenHeader(token));
