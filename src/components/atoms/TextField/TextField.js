import React from 'react';
import PropTypes from 'prop-types';
import { TextField as TextFields } from '@material-ui/core';

const TextField = ({ id, name, value, label, onChange, err, type }) => {
  const SearchField = () => (
    <TextFields
      id={id}
      name={name}
      label={label}
      onChange={onChange}
      error={err}
      defaultValue={value}
      type="search"
    />
  );

  const PasswordField = () => (
    <TextFields
      id={id}
      name={name}
      label={label}
      onChange={onChange}
      error={err}
      defaultValue={value}
      autoComplete="current-password"
      type="password"
    />
  );

  const NumberField = () => {
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
        InputLabelProps={inputLabelProps}
        type="number"
      />
    );
  };

  const ReadonlyField = () => {
    const inputProps = { readOnly: true };
    return (
      <TextFields
        id={id}
        name={name}
        label={label}
        onChange={onChange}
        error={err}
        defaultValue={value}
        InputProps={inputProps}
      />
    );
  };

  const DefaultField = () => (
    <TextFields
      id={id}
      name={name}
      label={label}
      onChange={onChange}
      error={err}
      defaultValue={value}
    />
  );

  if (type === 'search') return <SearchField />;
  if (type === 'readonly') return <ReadonlyField />;
  if (type === 'password') return <PasswordField />;
  if (type === 'number') return <NumberField />;
  return <DefaultField />;
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
