import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import PreInfoItemCard from '../../atoms/Card/PreInfoItemCard';
import CardListTitle from '../../atoms/CardListTitle/CardListTitle';
import IconButton from '../../atoms/IconButton/IconButton';
import AddIcon from '../../atoms/Icons/AddIcon';
import DeleteIcon from '../../atoms/Icons/DeleteIcon';
import AddDialog from '../AddDialog/AddDialog';
import DeleteDialog from '../DeleteDialog/DeleteDialog';
import NoChecked from '../../atoms/NoChecked/NoChecked';
import useToggle from '../../../libs/useToggle';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
`;

const ButtonWrapper = styled.div`
  width: 5%;
  display: flex;
  flex: wrap;
  flex-direction: column;
  align-items: center;
`;

const PaperStyled = styled(Paper)`
  width: 90%;
  height: 520px;
  justify-content: center;
  border-radius: 0;
`;

const PaperWrapper = styled.div`
  height: 430px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 1px;
    height: 1px;
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2.5px;
    background-color: #dddddd;

    &:hover {
      background-color: #aaaaaa;
    }
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
  }
`;

const PreInfoList = ({ title, head, rows, small, type }) => {
  const [select, setSelect] = useState(null);
  const [addOpen, setAddOpen] = useToggle();
  const [deleteOpen, setDeleteOpen] = useToggle();
  const [failOpen, setFailOpen] = useToggle();

  useEffect(() => {
    if (failOpen) setFailOpen();
  }, [addOpen, deleteOpen, select]);

  const handleOnSelect = (index, num) =>
    index === num ? setSelect(null) : setSelect(index);

  const handleDeleteOpen = () => {
    if (!select && !failOpen) setFailOpen();
    if (select !== null) setDeleteOpen();
  };

  const cardList = () =>
    rows.map((item, index) => {
      const row = Object.values(item);
      return (
        <PreInfoItemCard
          item={row}
          head={head}
          index={index}
          small={small}
          select={select}
          onClick={() => handleOnSelect(index, select)}
        />
      );
    });

  return (
    <ContentWrapper>
      <PaperStyled>
        <CardListTitle head={head} small={small} />
        <PaperWrapper>{cardList()}</PaperWrapper>
        {failOpen ? <NoChecked /> : null}
      </PaperStyled>

      <ButtonWrapper>
        <IconButton onClick={() => setAddOpen()}>
          <AddIcon />
        </IconButton>
        <IconButton onClick={() => handleDeleteOpen()}>
          <DeleteIcon />
        </IconButton>
      </ButtonWrapper>

      {!addOpen || (
        <AddDialog
          title={title}
          item={head}
          open={addOpen}
          setOpen={setAddOpen}
          type={type}
        />
      )}

      {!deleteOpen || (
        <DeleteDialog
          title={title}
          item={rows[select]}
          open={deleteOpen}
          setOpen={setDeleteOpen}
          type={type}
        />
      )}
    </ContentWrapper>
  );
};

PreInfoList.propTypes = {
  title: PropTypes.string,
  head: PropTypes.arrayOf(PropTypes.array),
  rows: PropTypes.arrayOf(PropTypes.array),
  small: PropTypes.bool,
  type: PropTypes.string.isRequired
};

PreInfoList.defaultProps = {
  title: '',
  head: [],
  rows: [],
  small: false
};

export default PreInfoList;
