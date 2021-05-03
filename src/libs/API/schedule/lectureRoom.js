import qs from 'qs';
import client, { tokenHeader } from '../client';

const url = `administrator/lecture-room`;

export const getLectureRooms = ({ direction, page, size, token }) => {
  const queryString = qs.stringify({ direction, page, size });
  return client.get(`${url}?${queryString}`, tokenHeader(token));
};
export const getLectureRoom = id => client.get(`${url}/${id}`);
export const addLectureRoom = () => client.post(`${url}`);
export const updateLectureRoom = () => client.put(`${url}`);
export const removeLectureRoom = id => client.delete(`${url}/${id}`);
