import client from '../client';

const url = `administrator/deployment`;

export const getDeployments = () => client.get(`${url}`);
export const getDeployment = id => client.get(`${url}/${id}`);
export const addDeployment = () => client.post(`${url}`);
export const updateDeployment = () => client.put(`${url}`);
export const removeDeployment = id => client.delete(`${url}/${id}`);
