import client from '../client';

const url = `administrator/usable-lecture-room`;

export const getUsableLectureRooms = () => client.get(`${url}`);
export const getUsableLectureRoom = id => client.get(`${url}/${id}`);
export const addUsableLectureRoom = () => client.post(`${url}`);
export const removeUsableLectureRoom = id => client.delete(`${url}/${id}`);
