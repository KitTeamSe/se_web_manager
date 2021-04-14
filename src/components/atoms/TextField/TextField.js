import React from 'react';
import PropTypes from 'prop-types';
import { TextField as TextFields } from '@material-ui/core';

const TextField = ({ id, name, value, label, onChange, err, type }) => {
  const fieldType = () => {
    if (type === 'search') return 'search';
    if (type === 'password') return 'password';
    if (type === 'number') return 'number';
    return null;
  };

  const fieldInputProps = () => {
    if (type === 'readonly') return { readOnly: true };
    if (type === 'number') return { inputProps: { min: 0 } };
    return null;
  };

  const fieldInputLabelProps = () => {
    if (type === 'number') return { shrink: true };
    return null;
  };

  const fieldAutoComplete = () => {
    if (type === 'password') return 'current-password';
    return null;
  };

  return (
    <TextFields
      id={id}
      name={name}
      label={label}
      onChange={onChange}
      error={err}
      defaultValue={value}
      InputProps={fieldInputProps()}
      InputLabelProps={fieldInputLabelProps()}
      autoComplete={fieldAutoComplete()}
      type={fieldType()}
    />
  );
};

TextField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  err: PropTypes.string,
  type: PropTypes.string
};

TextField.defaultProps = {
  id: '',
  name: '',
  value: '',
  label: '',
  onChange: () => {},
  err: '',
  type: 'text'
};

export default TextField;
