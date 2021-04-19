import client from '../client';

const url = `administrator/teacher`;

export const getTeachers = () => client.get(`${url}`);
export const getTeacher = id => client.get(`${url}/${id}`);
export const addTeacher = () => client.post(`${url}`);
export const updateTeacher = () => client.put(`${url}`);
export const removeTeacher = id => client.delete(`${url}/${id}`);
