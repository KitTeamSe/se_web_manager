import client from '../client';

const url = `authority-group-account`;

export const getAuthorityGroupAccounts = () => client.get(`${url}`);
export const getAuthorityGroupAccount = id => client.get(`${url}/${id}`);
export const addAuthorityGroupAccount = () => client.post(`${url}`);
export const removeAuthorityGroupAccount = id => client.put(`${url}/${id}`);
