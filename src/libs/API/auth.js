import client from './client';

export const signin = ({ id, pw }) => client.post('/api/v1/signin', { id, pw });
export const signup = ({
  answer,
  email,
  id,
  name,
  nickname,
  password,
  phoneNumber,
  questionId,
  studentId,
  type
}) =>
  client.post('/api/v1/signup', {
    answer,
    email,
    id,
    name,
    nickname,
    password,
    phoneNumber,
    questionId,
    studentId,
    type
  });

export const account = () => client.get('/api/v1/account');
