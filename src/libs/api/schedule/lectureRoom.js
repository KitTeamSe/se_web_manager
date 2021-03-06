import qs from 'qs';
import client, { tokenHeader, checkToken } from '../client';

const url = `administrator/lecture-room`;

export const getLectureRooms = ({ direction, page, size, token }) => {
  const queryString = qs.stringify({ direction, page, size });
  return client
    .get(`${url}?${queryString}`, tokenHeader(token))
    .catch(error => {
      checkToken(error);
      throw error;
    });
};
export const getLectureRoom = id => client.get(`${url}/${id}`);
export const addLectureRoom = ({
  building,
  roomNumber,
  capacity,
  note,
  token
}) =>
  client
    .post(
      `${url}`,
      { building, roomNumber, capacity, note },
      tokenHeader(token)
    )
    .catch(error => {
      checkToken(error);
      throw error;
    });
export const updateLectureRoom = () =>
  client.put(`${url}`).catch(error => {
    checkToken(error);
    throw error;
  });
export const removeLectureRoom = ({ id, token }) =>
  client.delete(`${url}/${id}`, tokenHeader(token)).catch(error => {
    checkToken(error);
    throw error;
  });
