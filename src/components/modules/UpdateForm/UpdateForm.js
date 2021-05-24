import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
// import FormInputContents from '../../../modules/FormInputContents/FormInputContents';
import TextField from '../../atoms/TextField/TextField';
import Button from '../../atoms/Button/Button';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 450px;
  padding: 1rem 2rem;
`;

const CardStyled = styled(Card)`
  width: 50%;
  display: flex;
  align-content: center;
  margin: 1rem;
  padding: 1rem;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: center;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding-bottom: 1.2rem;
  flex-direction: column;
  align-items: stretch;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-evenly;
`;

const FormStyled = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const idData = ['menuId', 'boardId', 'authorityGroupId'];

const UpdateForm = ({ id, head, goBack, form, onSubmit, onChange, error }) => {
  return (
    <CardStyled>
      <FormStyled onSubmit={onSubmit}>
        <Wrapper>
          <InfoWrapper>
            {head.map(el =>
              idData.indexOf(el.key) > -1 ? (
                <TextField
                  id={el.key}
                  name={el.key}
                  label={el.name}
                  type={el.type}
                  placeholder={el.placeholder}
                  value={id}
                  onChange={onChange}
                  items={el.items}
                />
              ) : (
                <TextField
                  id={el.key}
                  name={el.key}
                  label={el.name}
                  type={el.type}
                  placeholder={el.placeholder}
                  value={form[el.key]}
                  onChange={onChange}
                  items={el.items}
                />
              )
            )}
            {error && <ErrorMessage>{error.data.message}</ErrorMessage>}
          </InfoWrapper>
        </Wrapper>
        <ButtonWrapper>
          <Button type="button" onClick={goBack} color="primary" autoFocus>
            취 소
          </Button>
          <Button type="submit" color="secondary">
            수 정
          </Button>
        </ButtonWrapper>
      </FormStyled>
    </CardStyled>
  );
};

UpdateForm.propTypes = {
  head: PropTypes.arrayOf(PropTypes.array),
  onSubmit: PropTypes.func,
  onChange: PropTypes.func
};

UpdateForm.defaultProps = {
  head: [],
  onSubmit: null,
  onChange: null
};

export default UpdateForm;
