import client from '../client';

const url = `authority-group-authority`;

export const getAuthorityGroupAuthorities = () => client.get(`${url}`);
export const getAuthorityGroupAuthority = id => client.get(`${url}/${id}`);
export const addAuthorityGroupAuthority = () => client.post(`${url}`);
export const removeAuthorityGroupAuthorities = id =>
  client.delete(`${url}/${id}`);
