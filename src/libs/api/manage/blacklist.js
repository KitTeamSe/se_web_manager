import client from '../client';

const url = `blacklist`;

/* 블랙리스트 삭제 POST */

export const getBlacklists = () => client.get(`${url}`);
export const getBlacklist = id => client.get(`${url}/${id}`);
export const addBlacklist = () => client.post(`${url}`);
export const removeBlacklist = id => client.post(`${url}/${id}`);
