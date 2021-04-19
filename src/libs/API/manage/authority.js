import client from '../client';

const url = `authority`;

export const getAuthorities = () => client.get(`${url}`);
export const getAuthority = id => client.get(`${url}/${id}`);
