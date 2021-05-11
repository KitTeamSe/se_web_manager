import client from '../client';

const url = `authority-group`;

/* 권한그룹삭제 PUT */

export const getAuthorityGroups = () => client.get(`${url}`);
export const getAuthorityGroup = id => client.get(`${url}/${id}`);
export const addAuthorityGroup = () => client.post(`${url}`);
export const updateAuthorityGroup = () => client.put(`${url}`);
export const removeAuthorityGroup = id => client.put(`${url}/${id}`);
