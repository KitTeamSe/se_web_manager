import client from '../client';

const url = `administrator/lecture-room`;

export const getLectureRooms = () => client.get(`${url}`);
export const getLectureRoom = id => client.get(`${url}/${id}`);
export const addLectureRoom = () => client.post(`${url}`);
export const updateLectureRoom = () => client.put(`${url}`);
export const removeLectureRoom = id => client.delete(`${url}/${id}`);
