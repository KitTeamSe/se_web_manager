import client from '../client';

const url = `administrator/subject`;

export const getSubjects = () => client.get(`${url}`);
export const getSubject = id => client.get(`${url}/${id}`);
export const addSubject = () => client.post(`${url}`);
export const updateSubject = () => client.put(`${url}`);
export const removeSubject = id => client.delete(`${url}/${id}`);
