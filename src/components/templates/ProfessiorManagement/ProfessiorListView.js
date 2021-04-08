import React from 'react';
import styled from 'styled-components';
import RoundButton from '../../atoms/Button/RoundButton';
import ContentHeader from '../../modules/ContentHeader/ContentHeader';
import CourseListViewContentMain from '../../modules/ContentMain/CourseListViewContentMain';

const Wrapper = styled.div``;
const head = [
  {
    key: 'teacher_id',
    name: '#',
    width: '10%'
  },
  {
    key: 'name',
    name: '이름',
    width: '20%'
  },
  {
    key: 'type',
    name: '교원구분',
    width: '20%'
  },
  {
    key: 'department',
    name: '소속',
    width: '50%'
  }
];

const inActive = [
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

const active = [
  {
    teacher_id: '3',
    name: '김성렬',
    type: '교수',
    department: '컴퓨터소프트웨어공학과'
  },
  {
    teacher_id: '4',
    name: '김선명',
    type: '교수',
    department: '컴퓨터소프트웨어공학과'
  }
];

const ProfessiorListView = () => {
  const headItem = head;
  const inActiveRows = inActive;
  const activeRows = active;
  return (
    <Wrapper>
      <ContentHeader title="교원 관리">
        <RoundButton>엑셀 업로드</RoundButton>
        <RoundButton color="secondary">엑셀 다운로드</RoundButton>
      </ContentHeader>
      <CourseListViewContentMain
        head={headItem}
        inActiveRows={inActiveRows}
        activeRows={activeRows}
      />
    </Wrapper>
  );
};

export default ProfessiorListView;
