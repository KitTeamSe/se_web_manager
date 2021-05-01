import client from '../client';

const url = `administrator/period`;

export const getPeriods = () => client.get(`${url}`);
export const getPeriod = id => client.get(`${url}/${id}`);
export const addPeriod = () => client.post(`${url}`);
export const updatePeriod = () => client.put(`${url}`);
export const removePeriod = id => client.delete(`${url}/${id}`);
