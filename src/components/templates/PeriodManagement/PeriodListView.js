import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContentHeader from '../../modules/ContentHeader/ContentHeader';
import PreInfoView from '../../modules/ContentMain/PreInfoView';

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

  useEffect(() => {
    setRows(active);
  }, []);

  return (
    <Wrapper>
      <ContentHeader title={headerTitle} />
      <PreInfoView title={title} head={headItem} rows={rows} />
    </Wrapper>
  );
};

export default PeriodListView;
