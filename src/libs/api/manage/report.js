import qs from 'qs';
import client, { tokenHeader } from '../client';

const URL = `administrator/report`;

export const getReports = ({ direction, page, size, token }) => {
  const queryString = qs.stringify({ direction, page, size });
  return client.get(`${URL}?${queryString}`, tokenHeader(token));
};
export const getReport = ({ id, token }) =>
  client.get(`${URL}/${id}`, tokenHeader(token));

export const updateReport = ({ description, reportId, reportStatus, token }) =>
  client.put(
    `${URL}`,
    {
      description,
      reportId,
      reportStatus
    },
    tokenHeader(token)
  );

export const removeReport = ({ id, token }) =>
  client.delete(`${URL}/${id}`, tokenHeader(token));
