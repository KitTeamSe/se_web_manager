import client from './client';

export const getSubjects = () => client.get(`/api/v1/subject`);
export const getSubject = id => client.get(`/api/v1/subject/${id}`);
export const addSubject = () => client.post(`/api/v1/subject`);
export const updateSubject = () => client.put(`/api/v1/subject`);
export const removeSubject = id => client.delete(`/api/v1/subject/${id}`);
