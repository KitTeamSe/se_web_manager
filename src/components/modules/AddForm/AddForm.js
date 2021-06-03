import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
// import FormInputContents from '../../../modules/FormInputContents/FormInputContents';
import { Edit } from '@material-ui/icons';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

const TextFieldWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const AddForm = ({ head, goBack, form, onSubmit, onChange, error }) => {
  const handleErrorField = el => {
    const errorIndex = error
      ? error.data.errors.find(e => e.field === el.key)
      : null;
    const errorData = errorIndex ? errorIndex.reason : null;
    return (
      <TextField
        id={el.key}
        name={el.key}
        label={el.name}
        type={el.type}
        placeholder={el.placeholder}
        value={form[el.key]}
        onChange={onChange}
        items={el.items}
        error={error && errorIndex}
        helperText={errorData}
      />
    );
  };

  return (
    <CardStyled>
      <FormStyled onSubmit={onSubmit}>
        <Wrapper>
          <InfoWrapper>
            {head.map((el, i) => {
              if (i === 0) return null;
              if (error && 'errors' in error.data) {
                return handleErrorField(el);
              }
              return (
                <TextFieldWrapper>
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
                  {'hint' in el && <Edit />}
                </TextFieldWrapper>
              );
            })}
            {error && <ErrorMessage>{error.data.message}</ErrorMessage>}
          </InfoWrapper>
        </Wrapper>
        <ButtonWrapper>
          <Button type="button" onClick={goBack} color="primary" autoFocus>
            취 소
          </Button>
          <Button type="submit" color="secondary">
            생 성
          </Button>
        </ButtonWrapper>
      </FormStyled>
    </CardStyled>
  );
};

AddForm.propTypes = {
  head: PropTypes.arrayOf(PropTypes.array),
  form: PropTypes.objectOf(PropTypes.object),
  onSubmit: PropTypes.func,
  onChange: PropTypes.func
};

AddForm.defaultProps = {
  head: [],
  form: null,
  onSubmit: null,
  onChange: null
};

export default AddForm;
