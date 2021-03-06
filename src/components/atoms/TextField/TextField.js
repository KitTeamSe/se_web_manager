import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField as TextFields } from '@material-ui/core';

const TextField = ({
  id,
  name,
  value,
  label,
  onChange,
  error,
  type,
  line,
  placeholder,
  helperText,
  items
}) => {
  /* eslint-disable react/jsx-props-no-spreading */

  const defaultField = props => (
    <TextFields
      id={id}
      name={name}
      label={label}
      onChange={onChange}
      defaultValue={value}
      placeholder={placeholder}
      error={error}
      helperText={helperText}
      fullWidth
      {...props}
    />
  );

  const searchField = () => {
    const props = {
      type: 'search'
    };
    return defaultField(props);
  };

  const idField = () => {
    const props = {
      variant: 'outlined',
      required: true,
      size: 'small',
      fullWidth: true,
      margin: 'normal',
      InputLabelProps: {
        shrink: true
      }
    };
    return defaultField(props);
  };

  const passwordField = () => {
    const props = {
      autoComplete: 'current-password',
      type: 'password',
      variant: 'outlined',
      required: true,
      size: 'small',
      fullWidth: true,
      margin: 'normal',
      InputLabelProps: {
        shrink: true
      }
    };
    return defaultField(props);
  };

  const numberField = () => {
    const inputProps = { inputProps: { min: 0 } };
    const inputLabelProps = { shrink: true };
    const props = {
      InputProps: { inputProps },
      InputLabelProps: { inputLabelProps },
      type: 'number'
    };
    return defaultField(props);
  };

  const readonlyField = () => {
    const inputProps = { readOnly: true };
    const props = {
      InputProps: { inputProps }
    };
    return defaultField(props);
  };

  const multilineField = () => {
    const props = {
      multiline: true,
      rows: line
    };
    return defaultField(props);
  };

  const timeField = () => {
    const inputProps = { step: 600 };
    const inputLabelProps = { shrink: true };
    const props = {
      inputProps: { inputProps },
      inputLabelProps: { inputLabelProps },
      type: 'time',
      defaultValue: '00:00'
    };
    return defaultField(props);
  };

  const dropdownField = () => {
    const [currency, setCurrency] = useState(value);
    const handleChange = e => {
      setCurrency(e.target.value);
      onChange(e);
    };

    return (
      <TextFields
        id={id}
        name={name}
        select
        label={label}
        value={currency}
        onChange={handleChange}
        defaultValue={currency}
        SelectProps={{
          native: true
        }}
      >
        <option>??????</option>
        {items.map(el => (
          <option key={el.value} value={el.value}>
            {el.label}
          </option>
        ))}
      </TextFields>
    );
  };

  if (type === 'search') return searchField();
  if (type === 'readonly') return readonlyField();
  if (type === 'id') return idField();
  if (type === 'password') return passwordField();
  if (type === 'number') return numberField();
  if (type === 'multiline') return multilineField();
  if (type === 'dropdown') return dropdownField();
  if (type === 'time') return timeField();
  if (type === 'empty') return null;
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
  line: PropTypes.number,
  placeholder: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object)
};

TextField.defaultProps = {
  id: '',
  name: '',
  value: '',
  label: '',
  onChange: () => {},
  err: '',
  type: 'text',
  line: 4,
  placeholder: null,
  items: null
};

export default TextField;
