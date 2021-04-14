import client from './client';

export const getLectureRooms = () => client.get(`/api/v1/lecture-room`);
export const getLectureRoom = id => client.get(`/api/v1/lecture-room/${id}`);
export const addLectureRoom = () => client.post(`/api/v1/lecture-room`);
export const updateLectureRoom = () => client.put(`/api/v1/lecture-room`);
export const removeLectureRoom = id =>
  client.delete(`/api/v1/lecture-room/${id}`);
