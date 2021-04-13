import React from 'react';
import styled from 'styled-components';
import ContentHeader from '../../modules/ContentHeader/ContentHeader';
import Button from '../../atoms/Button/RoundButton';
// import Table from '../../modules/Table/Table';
import PaginationTable from '../../modules/Table/PaginationTable';

const Wrapper = styled.div``;

const head = [
  {
    key: 'count',
    name: '#',
    width: '10%'
  },
  {
    key: 'name',
    name: '게시판 명',
    width: '25%'
  },
  {
    key: 'state',
    name: '상태',
    width: '25%'
  },
  {
    key: 'order',
    name: '순번',
    width: '10%'
  },
  {
    key: 'registrant_member_id',
    name: '등록자',
    width: '15%'
  },
  {
    key: 'last_modify_member_id',
    name: '수정자',
    width: '15%'
  }
];

const items = [
  {
    id: '1',
    name: 'ㄱㄱ 게시판',
    state: 'ㄱㄱ 게시판 상태',
    order: '1',
    registrant_member_id: '1',
    last_modify_member_id: '1'
  },
  {
    id: '2',
    name: 'ㄴㄴ 게시판',
    state: 'ㄴㄴ 게시판 상태',
    order: '2',
    registrant_member_id: '2',
    last_modify_member_id: '2'
  },
  {
    id: '3',
    name: 'ㄷㄷ 게시판',
    state: 'ㄷㄷ 게시판 상태',
    order: '3',
    registrant_member_id: '3',
    last_modify_member_id: '3'
  },
  {
    id: '4',
    name: 'ㄹㄹ 게시판',
    state: 'ㄹㄹ 게시판 상태',
    order: '4',
    registrant_member_id: '4',
    last_modify_member_id: '4'
  },
  {
    id: '5',
    name: 'ㅇㅇ 게시판',
    state: 'ㅇㅇ 게시판 상태',
    order: '5',
    registrant_member_id: '5',
    last_modify_member_id: '5'
  }
];

// const Wrapper = styled.div`
//   display: block;
// `;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 8px;
`;

const BoardListView = () => {
  const headItem = head;
  const tableItems = items;
  // const [headItem, setHeadItem] = useState(head);
  // const [tableItems, setTableItems] = useState(items);

  // useEffect(() => {
  //   setHeadItem(head);
  //   setTableItems(items);
  // }, []);

  return (
    <Wrapper>
      <ContentHeader title="게시판 관리">
        <Button variant="contained" color="primary">
          게시판추가
        </Button>
      </ContentHeader>
      <ContentWrapper>
        {/* <Table head={headItem} rows={tableItems} /> */}
        <PaginationTable head={headItem} rows={tableItems} />
      </ContentWrapper>
    </Wrapper>
  );
};

export default BoardListView;
