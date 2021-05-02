import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import NoCheckedDialog from '../../../atoms/NoCheckedDialog/NoCheckedDialog';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import PreInfoList from '../../../modules/PreInfoList/PreInfoList';
import AddDialog from '../../Dialog/AddDialog/AddDialog';
import DeleteDialog from '../../Dialog/DeleteDialog/DeleteDialog';
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
    key: 'periodId',
    name: '#',
    type: 'id',
    width: '10%'
  },
  {
    key: 'periodOrder',
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
    key: 'startTime',
    name: '시작시간',
    type: 'string',
    width: '15%'
  },
  {
    key: 'endTime',
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

const PeriodListPage = ({ periods, error, loading }) => {
  const title = '교시';
  const headerTitle = `사전정보 - ${title}관리`;
  const [addOpen, setAddOpen] = useToggle();
  const [deleteOpen, setDeleteOpen] = useToggle();
  const [select, setSelect] = useState(null);
  const [failOpen, setFailOpen] = useToggle();

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
          {error ? (
            <div>error</div>
          ) : (
            !loading &&
            periods && (
              <>
                <PreInfoList
                  title={title}
                  head={head}
                  rows={periods.data.content}
                  select={select}
                  setSelect={setSelect}
                />
                {failOpen ? <NoCheckedDialog /> : null}
              </>
            )
          )}
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
            head={periods.data.content[select]}
            open={deleteOpen}
            setOpen={setDeleteOpen}
            type="period"
          />
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

PeriodListPage.propTypes = {
  periods: PropTypes.shape({
    data: PropTypes.shape({
      content: PropTypes.shape({
        periodId: PropTypes.string.isRequired,
        periodOrder: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        startTime: PropTypes.string.isRequired,
        endTime: PropTypes.string.isRequired,
        note: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }),
  error: PropTypes.string,
  loading: PropTypes.string
};

PeriodListPage.defaultProps = {
  periods: null,
  error: null,
  loading: null
};

export default PeriodListPage;
