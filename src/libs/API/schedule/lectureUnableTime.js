import client from '../client';

const url = `administrator/lecture-unable-time`;

export const getLectureUnableTimes = () => client.get(`${url}`);
export const getLectureUnableTime = id => client.get(`${url}/${id}`);
export const addLectureUnableTime = () => client.post(`${url}`);
export const updateLectureUnableTime = () => client.put(`${url}`);
export const removeLectureUnableTime = id => client.delete(`${url}/${id}`);
