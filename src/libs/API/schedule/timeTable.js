import client from '../client';

const url = `administrator/time-table`;

export const getTimeTables = () => client.get(`${url}`);
export const getTimeTable = id => client.get(`${url}/${id}`);
export const addTimeTable = () => client.post(`${url}`);
export const updateTimeTable = () => client.put(`${url}`);
export const removeTimeTable = id => client.delete(`${url}/${id}`);
