import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import PreInfoList from '../../../modules/PreInfoList/PreInfoList';
import AddDialog from '../../Dialog/AddDialog/AddDialog';
import DeleteDialog from '../../Dialog/DeleteDialog/DeleteDialog';
import AddDeleteBox from '../../../modules/AddDeleteBox/AddDeleteBox';
import useToggle from '../../../../libs/useToggle';
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

const head = [
  {
    key: 'teacherId',
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

const TeacherListPage = ({ teachers, error, loading }) => {
  const title = '교원';
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
            teachers && (
              <>
                <PreInfoList
                  title={title}
                  head={head}
                  rows={teachers.data.content}
                  select={select}
                  setSelect={setSelect}
                />
                <Pagination
                  totalPage={teachers.data.totalPages}
                  page={teachers.data.pageable.pageNumber + 1}
                  link="m/teacher"
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
          <AddDialog
            title={title}
            head={head}
            open={addOpen}
            setOpen={setAddOpen}
            type="teacher"
          />
        )}

        {!deleteOpen || (
          <DeleteDialog
            title={title}
            head={teachers.data.content[select]}
            open={deleteOpen}
            setOpen={setDeleteOpen}
            type="teacher"
          />
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

TeacherListPage.propTypes = {
  teachers: PropTypes.shape({
    data: PropTypes.shape({
      content: PropTypes.shape({
        autoCreated: PropTypes.bool.isRequired,
        department: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        note: PropTypes.string.isRequired,
        teacherId: PropTypes.number.isRequired,
        type: PropTypes.oneOf([
          'FULL_PROFESSOR',
          'FIXED_TERM_PROFESSOR',
          'ASSISTANT',
          'STUDENT',
          'ETC'
        ]).isRequired
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

TeacherListPage.defaultProps = {
  teachers: null,
  error: null,
  loading: null
};

export default TeacherListPage;
