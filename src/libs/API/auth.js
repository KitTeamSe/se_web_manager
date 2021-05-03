import client from './client';

export const signin = ({ id, pw }) => client.post('signin', { id, pw });
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
  client.post('signup', {
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
