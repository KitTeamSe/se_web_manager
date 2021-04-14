import client from './client';

export const getTeachers = () => client.get(`/api/v1/teacher`);
export const getTeacher = id => client.get(`/api/v1/teacher/${id}`);
export const addTeacher = () => client.post(`/api/v1/teacher`);
export const updateTeacher = () => client.put(`/api/v1/teacher`);
export const removeTeacher = id => client.delete(`/api/v1/teacher/${id}`);
