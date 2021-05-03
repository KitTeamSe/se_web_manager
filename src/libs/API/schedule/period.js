import qs from 'qs';
import client, { tokenHeader } from '../client';

const url = `administrator/period`;

export const getPeriods = ({ direction, page, size, token }) => {
  const queryString = qs.stringify({ direction, page, size });
  return client.get(`${url}?${queryString}`, tokenHeader(token));
};
export const getPeriod = id => client.get(`${url}/${id}`);
export const addPeriod = () => client.post(`${url}`);
export const updatePeriod = () => client.put(`${url}`);
export const removePeriod = id => client.delete(`${url}/${id}`);
