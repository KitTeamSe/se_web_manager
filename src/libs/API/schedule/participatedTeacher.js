import client from '../client';

const url = `administrator/participated-teacher`;

export const getParticipatedTeachers = () => client.get(`${url}`);
export const getParticipatedTeacher = id => client.get(`${url}/${id}`);
export const addParticipatedTeacher = () => client.post(`${url}`);
export const removeParticipatedTeacher = id => client.delete(`${url}/${id}`);
