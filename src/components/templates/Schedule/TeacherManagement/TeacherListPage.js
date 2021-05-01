import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import NoCheckedDialog from '../../../atoms/NoCheckedDialog/NoCheckedDialog';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import PreInfoList from '../../../modules/PreInfoList/PreInfoList';
import AddDialog from '../../../modules/AddDialog/AddDialog';
import DeleteDialog from '../../../modules/DeleteDialog/DeleteDialog';
import AddDeleteBox from '../../../modules/AddDeleteBox/AddDeleteBox';
import useToggle from '../../../../libs/useToggle';

const ContentWrapper = styled.div`
  display: flex;
  padding: 8px;
`;

const PaperStyled = styled(Paper)`
  width: 95%;
  height: 520px;
  justify-content: center;
  border-radius: 0;
`;

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
  const [addOpen, setAddOpen] = useToggle();
  const [deleteOpen, setDeleteOpen] = useToggle();
  const [select, setSelect] = useState(null);
  const [failOpen, setFailOpen] = useToggle();

  useEffect(() => {
    setRows(active);
  }, []);

  useEffect(() => {
    if (failOpen) setFailOpen();
  }, [addOpen, deleteOpen, select]);

  useEffect(() => {});

  const handleDeleteOpen = () => {
    if (!select && !failOpen) setFailOpen();
    if (select !== null) setDeleteOpen();
  };

  return (
    <Wrapper>
      <ContentHeader title={headerTitle} />
      <ContentWrapper>
        <PaperStyled>
          <PreInfoList
            title={title}
            head={headItem}
            rows={rows}
            select={select}
            setSelect={setSelect}
          />
          {failOpen ? <NoCheckedDialog /> : null}
        </PaperStyled>
        <AddDeleteBox
          setAddOpen={setAddOpen}
          setDeleteOpen={handleDeleteOpen}
        />

        {!addOpen || (
          <AddDialog
            title={title}
            head={head}
            open={addOpen}
            setOpen={setAddOpen}
            type="lectureRoom"
          />
        )}

        {!deleteOpen || (
          <DeleteDialog
            title={title}
            head={rows[select]}
            open={deleteOpen}
            setOpen={setDeleteOpen}
            type="lectureRoom"
          />
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default TeacherListView;
