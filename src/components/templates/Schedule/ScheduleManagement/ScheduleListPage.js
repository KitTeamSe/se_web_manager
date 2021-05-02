import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import Button from '../../../atoms/Button/RoundButton';
import DropDown from '../../../atoms/DropDown/DropDown';
import Tabs from '../../../atoms/Tabs/Tabs';
import PaginationTable from '../../../modules/Table/PaginationTable';
import useToggle from '../../../../libs/useToggle';
import LoadingData from '../../../modules/LoadingData/LoadingData';

const Wrapper = styled.div`
  padding: 5px 24px;
`;

const ContentWrapper = styled.div`
  align-items: flex-end;
  padding-top: 8px;
`;

const SCHEDULE_STATUS = ['CREATED', 'COMPLETED', 'ALL'];
const YEAR_STATUS = ['ALL', '2021', '2020', '2019', '2018'];
const SCHEDULE_ITEMS = [
  { name: '작성중인 시간표', status: SCHEDULE_STATUS[0] },
  { name: '작성완료 시간표', status: SCHEDULE_STATUS[1] },
  { name: '전체보기', status: SCHEDULE_STATUS[2] }
];

const head = [
  {
    key: 'count',
    name: '#',
    width: '10%'
  },
  {
    key: 'name',
    name: '제목',
    width: '22.5%'
  },
  {
    key: 'year',
    name: '연도',
    width: '22.5%'
  },
  {
    key: 'semester',
    name: '학기',
    width: '22.5%'
  },
  {
    key: 'createdBy',
    name: '생성자',
    width: '22.5%'
  }
];

const items = [
  {
    createdBy: 1,
    name: '테스트 시간표 1',
    semester: 2,
    status: SCHEDULE_STATUS[0],
    timeTableId: 1,
    year: '2021'
  },
  {
    createdBy: 2,
    name: '테스트 시간표 2',
    semester: 1,
    status: SCHEDULE_STATUS[1],
    timeTableId: 2,
    year: '2021'
  },
  {
    createdBy: 3,
    name: '테스트 시간표 3',
    semester: 2,
    status: SCHEDULE_STATUS[0],
    timeTableId: 3,
    year: '2020'
  },
  {
    createdBy: 4,
    name: '테스트 시간표 4',
    semester: 1,
    status: SCHEDULE_STATUS[0],
    timeTableId: 4,
    year: '2020'
  },
  {
    createdBy: 5,
    name: '테스트 시간표 5',
    semester: 2,
    status: SCHEDULE_STATUS[1],
    timeTableId: 5,
    year: '2019'
  }
];

const ScheduleListPage = () => {
  const headItem = head;
  const [tableItems, setTableItems] = useState([]);
  // const [headItem, setHeadItem] = useState(head);
  const [status, setSchedule] = useState(null);
  const [year, setYear] = useState(null);
  const [isLoading, setIsLoading] = useToggle();
  // const [yearItems, setyearItems] = useState([all]);

  const handleTableItems = () => {
    setIsLoading(false);
    if (year === YEAR_STATUS[0] && status === 2) {
      setTableItems(items);
      setIsLoading(true);
      return;
    }
    const newItems = [];
    if (year === YEAR_STATUS[0]) {
      items.forEach(data => {
        if (SCHEDULE_ITEMS[status].status === data.status) newItems.push(data);
      });
      setTableItems(newItems);
      setIsLoading(true);
      return;
    }
    if (status === 2) {
      items.forEach(data => {
        if (year === data.year) newItems.push(data);
      });
      setTableItems(newItems);
      setIsLoading(true);
      return;
    }
    items.forEach(data => {
      if (year === data.year && SCHEDULE_ITEMS[status].status === data.status)
        newItems.push(data);
    });
    setTableItems(newItems);
    setIsLoading(true);
  };

  useEffect(() => {
    setSchedule(0);
    setYear(YEAR_STATUS[1]);
    handleTableItems();
  }, []);

  useEffect(() => {
    handleTableItems();
  }, [year]);

  useEffect(() => {
    handleTableItems();
  }, [status]);

  return (
    <Wrapper>
      <ContentHeader title="시간표 관리">
        <DropDown
          items={YEAR_STATUS}
          value={year}
          setValue={setYear}
          first="1"
        />
        <Button variant="contained" color="secondary">
          시간표생성
        </Button>
      </ContentHeader>
      <ContentWrapper>
        <Tabs select={status} setSelect={setSchedule} items={SCHEDULE_ITEMS} />
        {tableItems.length ? (
          <PaginationTable
            head={headItem}
            rows={tableItems}
            change={tableItems}
          />
        ) : (
          <LoadingData isLoading={isLoading} />
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default ScheduleListPage;
