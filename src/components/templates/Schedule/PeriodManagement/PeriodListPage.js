import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import PreInfoList from '../../../modules/PreInfoList/PreInfoList';
import AddDialogContainer from '../../../modules/AddDialog/PeriodAddDialogContainer';
import DeleteDialogContainer from '../../../modules/DeleteDialog/PeriodDeleteDialogContainer';
import AddDeleteBox from '../../../modules/AddDeleteBox/AddDeleteBox';
import useToggle from '../../../../libs/useToggle';
import PeriodData from '../../../../statics/data/PeriodData';
import Pagination from '../../../modules/Pagination/Pagination';

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

const PeriodListPage = ({ periods, error, loading, select, handleSelect }) => {
  const title = '교시';
  const headerTitle = `사전정보 - ${title}관리`;
  const [addOpen, setAddOpen] = useToggle();
  const [deleteOpen, setDeleteOpen] = useToggle();
  const [failOpen, setFailOpen] = useToggle();

  useEffect(() => {
    if (failOpen) setFailOpen();
  }, [addOpen, deleteOpen, select]);

  const handleDeleteOpen = () => {
    if (!select && !failOpen) setFailOpen();
    if (select !== null) setDeleteOpen();
  };

  return (
    <>
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
                  handleSelect={handleSelect}
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
          select={select}
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
          <DeleteDialogContainer
            title={title}
            data={periods.data.content[select]}
            open={deleteOpen}
            setOpen={setDeleteOpen}
            type="period"
          />
        )}
      </ContentWrapper>
    </>
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
  loading: PropTypes.string,
  select: PropTypes.string,
  handleSelect: PropTypes.func.isRequired
};

PeriodListPage.defaultProps = {
  periods: null,
  error: null,
  loading: null,
  select: null
};

export default PeriodListPage;
