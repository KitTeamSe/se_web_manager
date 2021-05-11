import client from '../client';

const url = `administrator/open-subject`;

export const getOpenSubjects = () => client.get(`${url}`);
export const getOpenSubject = id => client.get(`${url}/${id}`);
export const addOpenSubject = () => client.post(`${url}`);
export const updateOpenSubject = () => client.put(`${url}`);
export const removeOpenSubject = id => client.delete(`${url}/${id}`);
