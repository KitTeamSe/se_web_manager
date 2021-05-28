import qs from 'qs';
import client, { tokenHeader } from '../client';

const URL = `account`;

export const getAccounts = ({ direction, page, size, token }) => {
  const queryString = qs.stringify({ direction, page, size });
  return client.get(`${URL}?${queryString}`, tokenHeader(token));
};
export const getAccount = ({ id, token }) =>
  client.get(`${URL}/${id}`, tokenHeader(token));

export const updateAccount = ({
  id,
  informationOpenAgree,
  name,
  nickname,
  password,
  studentId,
  token
}) =>
  client.put(
    `${URL}`,
    {
      id,
      informationOpenAgree,
      name,
      nickname,
      password,
      studentId
    },
    tokenHeader(token)
  );

export const removeAccount = ({ id, token }) =>
  client.delete(`${URL}/${id}`, tokenHeader(token));
