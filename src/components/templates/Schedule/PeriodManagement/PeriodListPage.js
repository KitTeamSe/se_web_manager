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
    key: 'period_id',
    name: '#',
    type: 'id',
    width: '10%'
  },
  {
    key: 'period_order',
    name: '순서',
    type: 'number',
    width: '10%'
  },
  {
    key: 'name',
    name: '이름',
    type: 'string',
    width: '10%'
  },
  {
    key: 'start_time',
    name: '시작시간',
    type: 'string',
    width: '15%'
  },
  {
    key: 'end_time',
    name: '종료시간',
    type: 'string',
    width: '15%'
  },
  {
    key: 'note',
    name: '비고',
    type: 'string',
    width: '40%'
  }
];

const active = [
  {
    period_id: '1',
    period_order: 1,
    name: '1',
    start_time: '09:00',
    end_time: '09:50',
    note: '없음'
  },
  {
    period_id: '2',
    period_order: 2,
    name: '2',
    start_time: '10:00',
    end_time: '10:50',
    note: '없음'
  },
  {
    period_id: '3',
    period_order: 3,
    name: '3',
    start_time: '11:00',
    end_time: '11:50',
    note: '없음'
  },
  {
    period_id: '4',
    period_order: 9,
    name: 'A',
    start_time: '18:00',
    end_time: '18:50',
    note: '야간'
  },
  {
    period_id: '5',
    period_order: 10,
    name: 'B',
    start_time: '19:00',
    end_time: '19:50',
    note: '야간'
  }
];

const PeriodListView = () => {
  const headItem = head;
  const title = '교시';
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
            type="period"
          />
        )}

        {!deleteOpen || (
          <DeleteDialog
            title={title}
            head={rows[select]}
            open={deleteOpen}
            setOpen={setDeleteOpen}
            type="period"
          />
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default PeriodListView;
