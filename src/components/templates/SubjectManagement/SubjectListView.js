import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RoundButton from '../../atoms/Button/RoundButton';
import ContentHeader from '../../modules/ContentHeader/ContentHeader';
import PreInfoViewContentMain from '../../modules/ContentMain/PreInfoViewContentMain';

const Wrapper = styled.div``;

const head = [
  {
    key: 'subject_id',
    name: '#',
    width: '3%'
  },
  {
    key: 'curriculum',
    name: '교육과정',
    width: '33%'
  },
  {
    key: 'type',
    name: '타입',
    width: '7%'
  },
  {
    key: 'code',
    name: '교과목코드',
    width: '14%'
  },
  {
    key: 'name',
    name: '교과목명',
    width: '19%'
  },
  {
    key: 'grade',
    name: '학년',
    width: '7%'
  },
  {
    key: 'semester',
    name: '학기',
    width: '7%'
  },
  {
    key: 'credit',
    name: '학점',
    width: '7%'
  }
];

const inActive = [
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
  const [inActiveRows, setInActiveRows] = useState(inActive);
  const [activeRows, setActiveRows] = useState(active);

  useEffect(() => {
    setInActiveRows(inActive);
    setActiveRows(active);
  }, []);

  return (
    <Wrapper>
      <ContentHeader title="교과 관리">
        <RoundButton>엑셀 업로드</RoundButton>
        <RoundButton color="secondary">엑셀 다운로드</RoundButton>
      </ContentHeader>
      <PreInfoViewContentMain
        head={headItem}
        inActiveRows={inActiveRows}
        activeRows={activeRows}
        setInActiveRows={setInActiveRows}
        setActiveRows={setActiveRows}
        small
      />
    </Wrapper>
  );
};

export default SubjectListView;
