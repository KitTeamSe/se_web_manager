import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import PreInfoList from '../../../modules/ContentMain/PreInfoList';

const Wrapper = styled.div``;

const head = [
  {
    key: 'teacher_id',
    name: '#',
    type: 'id',
    width: '10%'
  },
  {
    key: 'name',
    name: '이름',
    type: 'string',
    width: '20%'
  },
  {
    key: 'type',
    name: '교원구분',
    type: 'string',
    width: '20%'
  },
  {
    key: 'department',
    name: '소속',
    type: 'string',
    width: '50%'
  }
];

const active = [
  {
    teacher_id: '1',
    name: '임은기',
    type: '교수',
    department: '컴퓨터소프트웨어공학과'
  },
  {
    teacher_id: '2',
    name: '홍길동',
    type: '시간강사',
    department: '외부강사'
  }
];

const TeacherListView = () => {
  const headItem = head;
  const title = '교원';
  const headerTitle = `사전정보 - ${title}관리`;
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(active);
  }, []);

  return (
    <Wrapper>
      <ContentHeader title={headerTitle} />
      <PreInfoList title={title} head={headItem} rows={rows} type="teacher" />
    </Wrapper>
  );
};

export default TeacherListView;