import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import PreInfoList from '../../../modules/PreInfoList/PreInfoList';
import AddDialogContainer from '../../Dialog/AddDialog/PeriodAddDialogContainer';
import DeleteDialog from '../../Dialog/DeleteDialog/DeleteDialog';
import AddDeleteBox from '../../../modules/AddDeleteBox/AddDeleteBox';
import useToggle from '../../../../libs/useToggle';
import PeriodData from '../../../../statics/data/PeriodData';
import Pagination from '../../../atoms/Pagination/Pagination';

const ContentWrapper = styled.div`
  display: flex;
  padding: 8px;
`;

const PaperStyled = styled(Paper)`
  width: 95%;
  height: 100%;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper = styled.div``;

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
            <div>loading</div>
          ) : (
            !loading &&
            periods && (
              <>
                <PreInfoList
                  page={periods.data.pageable.pageNumber}
                  title={title}
                  head={PeriodData}
                  rows={periods.data.content}
                  select={select}
                  setSelect={setSelect}
                />
                <Pagination
                  totalPage={periods.data.totalPages}
                  page={periods.data.pageable.pageNumber + 1}
                  link="m/period"
                />
                {failOpen || null}
              </>
            )
          )}
        </PaperStyled>
        <AddDeleteBox
          setAddOpen={setAddOpen}
          setDeleteOpen={handleDeleteOpen}
        />

        {!addOpen || (
          <AddDialogContainer
            title={title}
            head={PeriodData}
            open={addOpen}
            setOpen={setAddOpen}
          />
        )}

        {!deleteOpen || (
          <DeleteDialog
            title={title}
            data={periods.data.content[select]}
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
      }).isRequired,
      totalPages: PropTypes.number,
      pageable: PropTypes.shape({
        pageNumber: PropTypes.number
      })
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
