import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import PreInfoList from '../../../modules/PreInfoList/PreInfoList';
import AddDialogContainer from '../../Dialog/AddDialog/AddDialogContainer';
import DeleteDialog from '../../Dialog/DeleteDialog/DeleteDialog';
import AddDeleteBox from '../../../modules/AddDeleteBox/AddDeleteBox';
import useToggle from '../../../../libs/useToggle';
import SubjectData from '../../../../statics/data/SubjectData';
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

const SubjectListPage = ({ subjects, error, loading }) => {
  const title = '교과';
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
            subjects && (
              <>
                <PreInfoList
                  page={subjects.data.pageable.pageNumber}
                  title={title}
                  head={SubjectData}
                  rows={subjects.data.content}
                  select={select}
                  setSelect={setSelect}
                />
                <Pagination
                  totalPage={subjects.data.totalPages}
                  page={subjects.data.pageable.pageNumber + 1}
                  link="m/subject"
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
            head={SubjectData}
            open={addOpen}
            setOpen={setAddOpen}
            addType="subject"
          />
        )}

        {!deleteOpen || (
          <DeleteDialog
            title={title}
            head={subjects.data.content[select]}
            open={deleteOpen}
            setOpen={setDeleteOpen}
            type="subject"
          />
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

SubjectListPage.propTypes = {
  subjects: PropTypes.shape({
    data: PropTypes.shape({
      content: PropTypes.shape({
        autoCreated: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
        credit: PropTypes.string.isRequired,
        curriculum: PropTypes.string.isRequired,
        grade: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        note: PropTypes.string.isRequired,
        semester: PropTypes.string.isRequired,
        subjectId: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
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

SubjectListPage.defaultProps = {
  subjects: null,
  error: null,
  loading: null
};

export default SubjectListPage;
