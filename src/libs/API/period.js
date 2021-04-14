import client from './client';

export const getPeriods = () => client.get(`/api/v1/period`);
export const getPeriod = id => client.get(`/api/v1/period/${id}`);
export const addPeriod = () => client.post(`/api/v1/period`);
export const updatePeriod = () => client.put(`/api/v1/period`);
export const removePeriod = id => client.delete(`/api/v1/period/${id}`);
