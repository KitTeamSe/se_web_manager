import qs from 'qs';
import client, { tokenHeader, checkToken } from '../client';

const url = `administrator/period`;

export const getPeriods = ({ direction, page, size, token }) => {
  const queryString = qs.stringify({ direction, page, size });
  return client
    .get(`${url}?${queryString}`, tokenHeader(token))
    .catch(error => {
      checkToken(error);
      throw error;
    });
};
export const getPeriod = id => client.get(`${url}/${id}`);
export const addPeriod = ({
  periodOrder,
  name,
  endTime,
  startTime,
  note,
  token
}) =>
  client
    .post(
      `${url}`,
      {
        periodOrder,
        name,
        endTime,
        startTime,
        note
      },
      tokenHeader(token)
    )
    .catch(error => {
      checkToken(error);
      throw error;
    });
export const updatePeriod = () => client.put(`${url}`);
export const removePeriod = ({ id, token }) =>
  client.delete(`${url}/${id}`, tokenHeader(token)).catch(error => {
    checkToken(error);
    throw error;
  });
