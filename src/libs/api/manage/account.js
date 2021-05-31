import qs from 'qs';
import client, { tokenHeader, checkToken } from '../client';

const URL = `account`;

export const getAccounts = ({ direction, page, size, token }) => {
  const queryString = qs.stringify({ direction, page, size });
  return client
    .get(`${URL}?${queryString}`, tokenHeader(token))
    .catch(error => {
      checkToken(error);
    });
};
export const getAccount = ({ id, token }) =>
  client.get(`${URL}/${id}`, tokenHeader(token)).catch(error => {
    checkToken(error);
  });

export const updateAccount = ({
  id,
  informationOpenAgree,
  name,
  nickname,
  password,
  studentId,
  token
}) =>
  client
    .put(
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
    )
    .catch(error => {
      checkToken(error);
    });

export const removeAccount = ({ id, token }) =>
  client.delete(`${URL}/${id}`, tokenHeader(token)).catch(error => {
    checkToken(error);
  });
