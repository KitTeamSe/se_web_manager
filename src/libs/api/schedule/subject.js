import qs from 'qs';
import client, { tokenHeader, checkToken } from '../client';

const url = `administrator/subject`;

export const getSubjects = ({ direction, page, size, token }) => {
  const queryString = qs.stringify({ direction, page, size });
  return client
    .get(`${url}?${queryString}`, tokenHeader(token))
    .catch(error => {
      checkToken(error);
      throw error;
    });
};
export const getSubject = id => client.get(`${url}/${id}`);
export const addSubject = ({
  subjectId,
  curriculum,
  type,
  code,
  name,
  grade,
  semester,
  credit,
  token
}) =>
  client
    .post(
      `${url}`,
      {
        subjectId,
        curriculum,
        type,
        code,
        name,
        grade,
        semester,
        credit
      },
      tokenHeader(token)
    )
    .catch(error => {
      checkToken(error);
      throw error;
    });
export const updateSubject = () => client.put(`${url}`);
export const removeSubject = ({ id, token }) =>
  client.delete(`${url}/${id}`, tokenHeader(token)).catch(error => {
    checkToken(error);
    throw error;
  });
