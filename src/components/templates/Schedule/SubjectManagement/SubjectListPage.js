import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import PreInfoList from '../../../modules/ContentMain/PreInfoList';

const Wrapper = styled.div``;

const head = [
  {
    key: 'subject_id',
    name: '#',
    type: 'id',
    width: '3%'
  },
  {
    key: 'curriculum',
    name: '교육과정',
    type: 'string',
    width: '33%'
  },
  {
    key: 'type',
    name: '교과구분',
    type: 'string',
    width: '7%'
  },
  {
    key: 'code',
    name: '교과목코드',
    type: 'string',
    width: '14%'
  },
  {
    key: 'name',
    name: '교과목명',
    type: 'string',
    width: '19%'
  },
  {
    key: 'grade',
    name: '학년',
    type: 'number',
    width: '7%'
  },
  {
    key: 'semester',
    name: '학기',
    type: 'string',
    width: '7%'
  },
  {
    key: 'credit',
    name: '학점',
    type: 'number',
    width: '7%'
  }
];

const active = [
  {
    subject_id: '1',
    curriculum: '컴퓨터소프트웨어공학과',
    type: '타입',
    code: 'CS0002',
    name: '전공컴퓨터',
    grade: '1',
    semester: '1',
    credit: '3'
  },
  {
    subject_id: '2',
    curriculum: '컴퓨터소프트웨어공학과',
    type: 'ㅌㅇ',
    code: 'CS0003',
    name: '전공컴퓨터',
    grade: '1',
    semester: '1',
    credit: '3'
  },
  {
    subject_id: '3',
    curriculum: '전문교양',
    type: 'ㅌㅇ',
    code: 'DD0002',
    name: '무슨공학개론',
    grade: '1',
    semester: '1',
    credit: '2'
  },
  {
    subject_id: '3',
    curriculum: '전문교양',
    type: 'ㅌㅇ',
    code: 'DD0002',
    name: '무슨공학개론',
    grade: '1',
    semester: '1',
    credit: '2'
  },
  {
    subject_id: '3',
    curriculum: '전문교양',
    type: 'ㅌㅇ',
    code: 'DD0002',
    name: '무슨공학개론',
    grade: '1',
    semester: '1',
    credit: '2'
  },
  {
    subject_id: '3',
    curriculum: '전문교양',
    type: 'ㅌㅇ',
    code: 'DD0002',
    name: '무슨공학개론',
    grade: '1',
    semester: '1',
    credit: '2'
  },
  {
    subject_id: '3',
    curriculum: '전문교양',
    type: 'ㅌㅇ',
    code: 'DD0002',
    name: '무슨공학개론',
    grade: '1',
    semester: '1',
    credit: '2'
  },
  {
    subject_id: '3',
    curriculum: '전문교양',
    type: 'ㅌㅇ',
    code: 'DD0002',
    name: '무슨공학개론',
    grade: '1',
    semester: '1',
    credit: '2'
  },
  {
    subject_id: '3',
    curriculum: '전문교양',
    type: 'ㅌㅇ',
    code: 'DD0002',
    name: '무슨공학개론',
    grade: '1',
    semester: '1',
    credit: '2'
  },
  {
    subject_id: '3',
    curriculum: '전문교양',
    type: 'ㅌㅇ',
    code: 'DD0002',
    name: '무슨공학개론',
    grade: '1',
    semester: '1',
    credit: '2'
  },
  {
    subject_id: '3',
    curriculum: '전문교양',
    type: 'ㅌㅇ',
    code: 'DD0002',
    name: '무슨공학개론',
    grade: '1',
    semester: '1',
    credit: '2'
  },
  {
    subject_id: '3',
    curriculum: '전문교양',
    type: 'ㅌㅇ',
    code: 'DD0002',
    name: '무슨공학개론',
    grade: '1',
    semester: '1',
    credit: '2'
  },
  {
    subject_id: '3',
    curriculum: '전문교양',
    type: 'ㅌㅇ',
    code: 'DD0002',
    name: '무슨공학개론',
    grade: '1',
    semester: '1',
    credit: '2'
  },
  {
    subject_id: '3',
    curriculum: '전문교양',
    type: 'ㅌㅇ',
    code: 'DD0002',
    name: '무슨공학개론',
    grade: '1',
    semester: '1',
    credit: '2'
  }
];

const SubjectListView = () => {
  const headItem = head;
  const title = '교과';
  const headerTitle = `사전정보 - ${title}관리`;
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(active);
  }, []);

  return (
    <Wrapper>
      <ContentHeader title={headerTitle} />
      <PreInfoList title={title} head={headItem} rows={rows} type="subject" />
    </Wrapper>
  );
};

export default SubjectListView;
