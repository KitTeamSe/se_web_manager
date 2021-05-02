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

// "autoCreated": false,
// "note": "비고 입력",
const head = [
  {
    key: 'subjectId',
    name: '#',
    type: 'id',
    width: '3%'
  },
  {
    key: 'curriculum',
    name: '교육과정',
    type: 'string',
    width: '33%'
  },
  {
    key: 'type',
    name: '교과구분',
    type: 'string',
    width: '7%'
  },
  {
    key: 'code',
    name: '교과목코드',
    type: 'string',
    width: '14%'
  },
  {
    key: 'name',
    name: '교과목명',
    type: 'string',
    width: '19%'
  },
  {
    key: 'grade',
    name: '학년',
    type: 'number',
    width: '7%'
  },
  {
    key: 'semester',
    name: '학기',
    type: 'string',
    width: '7%'
  },
  {
    key: 'credit',
    name: '학점',
    type: 'number',
    width: '7%'
  }
];

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
            subjects && (
              <>
                <PreInfoList
                  title={title}
                  head={head}
                  rows={subjects.data.content}
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
            type="subject"
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
      }).isRequired
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
