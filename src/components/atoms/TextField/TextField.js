import React from 'react';
import PropTypes from 'prop-types';
import { TextField as TextFields } from '@material-ui/core';

const TextField = ({ id, name, value, label, onChange, err, type, line }) => {
  const searchField = () => (
    <TextFields
      id={id}
      name={name}
      label={label}
      onChange={onChange}
      error={err}
      defaultValue={value}
      fullWidth
      type="search"
    />
  );

  const passwordField = () => (
    <TextFields
      id={id}
      name={name}
      label={label}
      onChange={onChange}
      error={err}
      defaultValue={value}
      fullWidth
      autoComplete="current-password"
      type="password"
    />
  );

  const numberField = () => {
    const inputProps = { inputProps: { min: 0 } };
    const inputLabelProps = { shrink: true };
    return (
      <TextFields
        id={id}
        name={name}
        label={label}
        onChange={onChange}
        error={err}
        defaultValue={value}
        InputProps={inputProps}
        fullWidth
        InputLabelProps={inputLabelProps}
        type="number"
      />
    );
  };

  const readonlyField = () => {
    const inputProps = { readOnly: true };
    return (
      <TextFields
        id={id}
        name={name}
        label={label}
        onChange={onChange}
        error={err}
        defaultValue={value}
        fullWidth
        InputProps={inputProps}
      />
    );
  };

  const multilineField = () => (
    <TextFields
      id={id}
      name={name}
      label={label}
      onChange={onChange}
      error={err}
      defaultValue={value}
      multiline
      fullWidth
      rows={line}
    />
  );

  const defaultField = () => (
    <TextFields
      id={id}
      name={name}
      label={label}
      onChange={onChange}
      error={err}
      fullWidth
      defaultValue={value}
    />
  );

  if (type === 'search') return searchField();
  if (type === 'readonly') return readonlyField();
  if (type === 'password') return passwordField();
  if (type === 'number') return numberField();
  if (type === 'multiline') return multilineField();
  return defaultField();
};

TextField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  err: PropTypes.string,
  type: PropTypes.string,
  line: PropTypes.number
};

TextField.defaultProps = {
  id: '',
  name: '',
  value: '',
  label: '',
  onChange: () => {},
  err: '',
  type: 'text',
  line: 4
};

export default TextField;
